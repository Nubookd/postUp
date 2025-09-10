import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

import styles from "./TaskChart.module.scss";

export default function TaskChart({ currentTask, width = 600, height = 400 }) {
  const svgRef = useRef();

  useEffect(() => {
    if (
      !currentTask ||
      !currentTask.points ||
      currentTask.points.length === 0
    ) {
      // Очищаем SVG если данных нет
      const svg = d3.select(svgRef.current);
      svg.selectAll("*").remove();
      return;
    }

    const data = currentTask.points.map((task) => {
      return task.deadline;
    });

    console.log(data);

    if (!data || data.length === 0) return;
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    // Стилизация
    svg.attr("style", "background: #f8f9fa");

    const margin = { top: 40, right: 30, bottom: 40, left: 50 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const g = svg
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // Шкалы
    const xScale = d3
      .scaleLinear()
      .domain([0, data.length - 1])
      .range([0, innerWidth]);

    const yScale = d3
      .scaleLinear()
      .domain([d3.min(data) * 0.9, d3.max(data) * 1.1]) // 10% padding
      .range([innerHeight, 0]);

    // Создаем скруглённую линию
    const lineGenerator = d3
      .line()
      .x((d, i) => xScale(i))
      .y((d) => yScale(d))
      .curve(d3.curveMonotoneX); // Оптимальное скругление

    // Рисуем линию
    const path = g
      .append("path")
      .datum(data)
      .attr("class", "chart-line")
      .attr("fill", "none")
      .attr("stroke", "#3f51b5")
      .attr("stroke-width", 3)
      .attr("d", lineGenerator);

    // Функция для точного нахождения точек на скруглённой кривой
    const getExactPointsOnCurve = () => {
      const pathNode = path.node();
      const pathLength = pathNode.getTotalLength();
      const points = [];

      // Для каждой исходной точки данных находим ближайшую точку на кривой
      data.forEach((d, i) => {
        const targetX = xScale(i);
        let start = 0;
        let end = pathLength;
        let point;

        // Бинарный поиск с высокой точностью
        while (end - start > 0.1) {
          const mid = (start + end) / 2;
          point = pathNode.getPointAtLength(mid);

          if (point.x < targetX) {
            start = mid;
          } else {
            end = mid;
          }
        }
        points.push(point || { x: targetX, y: yScale(d) });
      });

      return points;
    };

    // Получаем точные координаты точек на кривой
    const exactPoints = getExactPointsOnCurve();

    // Создаем обёртки для точек
    const pointGroups = g
      .selectAll(".point-group")
      .data(exactPoints)
      .enter()
      .append("g")
      .attr("class", "point-group")
      .attr("transform", (d, i) => `translate(${d.x}, ${d.y})`)
      .style("cursor", "pointer");

    // Добавляем точки (только обводка)
    pointGroups
      .append("circle")
      .attr("r", 5)
      .attr("fill", "white")
      .attr("stroke", "#3f51b5")
      .attr("stroke-width", 3)
      .on("mouseover", function () {
        d3.select(this)
          .transition()
          .duration(200)
          .attr("r", 8)
          .attr("stroke", "#ff5722")
          .attr("stroke-width", 4);
      })
      .on("mouseout", function () {
        d3.select(this)
          .transition()
          .duration(200)
          .attr("r", 5)
          .attr("stroke", "#3f51b5")
          .attr("stroke-width", 3);
      });

    // Добавляем подписи значений
    pointGroups
      .append("text")
      .text((d, i) => data[i])
      .attr("y", -15)
      .attr("text-anchor", "middle")
      .attr("font-size", "12px")
      .attr("fill", "#666")
      .attr("opacity", 0)
      .on("mouseover", function () {
        d3.select(this).transition().duration(200).attr("opacity", 1);
      })
      .on("mouseout", function () {
        d3.select(this).transition().duration(200).attr("opacity", 0);
      });

    // Оси
    g.append("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(0, ${innerHeight})`)
      .call(d3.axisBottom(xScale).tickSizeOuter(0))
      .style("color", "#666");

    g.append("g")
      .attr("class", "y-axis")
      .call(d3.axisLeft(yScale).tickSizeOuter(0))
      .style("color", "#666");

    // Сетка
    g.append("g")
      .attr("class", "grid")
      .attr("transform", `translate(0, ${innerHeight})`)
      .call(d3.axisBottom(xScale).tickSize(-innerHeight).tickFormat(""))
      .style("color", "#e0e0e0")
      .style("stroke-dasharray", "2,2");

    g.append("g")
      .attr("class", "grid")
      .call(d3.axisLeft(yScale).tickSize(-innerWidth).tickFormat(""))
      .style("color", "#e0e0e0")
      .style("stroke-dasharray", "2,2");
  }, [currentTask, width, height]);

  return <svg ref={svgRef} className="smooth-chart" />;
}

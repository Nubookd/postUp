import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Поднимаемся на два уровня выше: из scripts -> assets -> src
const srcPath = path.resolve(__dirname, "..", "..");

const componentName = process.argv[2];
if (!componentName) {
  console.error("Укажите имя компонента");
  process.exit(1);
}

// Путь к папке компонента внутри src/components
const folderPath = path.join(srcPath, "components", componentName);

if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath, { recursive: true });
  console.log(`Папка создана: ${folderPath}`);
} else {
  console.log(`Папка уже существует: ${folderPath}`);
}

const jsxContent = `import React from 'react'
import styles from './${componentName}.module.scss';

export default function ${componentName}() {
  return (
    <div>ModalCreatePointTask</div>
  )
}
`;

const scssContent = `@use "../../assets/styles/variables.scss" as *;

.container {
  /* Стили для ${componentName} */
}
`;

fs.writeFileSync(path.join(folderPath, `${componentName}.jsx`), jsxContent);
fs.writeFileSync(
  path.join(folderPath, `${componentName}.module.scss`),
  scssContent
);

console.log(`Компонент ${componentName} создан в ${folderPath}`);

import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";


const eslintConfig = defineConfig([
  // Next.js推奨ルールとTypeScriptルールの配列を展開
  ...nextVitals,
  ...nextTs,

  // プロジェクト固有の除外設定
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;

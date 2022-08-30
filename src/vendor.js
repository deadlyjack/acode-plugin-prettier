import prettier from "prettier/standalone";
import pretterParserHTML from "prettier/parser-html";
import prettierParserBabel from "prettier/parser-babel";
import prettierParserGraphql from "prettier/parser-graphql";
import prettierParserAngular from "prettier/parser-angular";
import prettierParserAspree from "prettier/parser-espree";
import prettierParserFlow from "prettier/parser-flow";
import prettierParserGlimmer from "prettier/parser-glimmer";
import prettierParserMd from "prettier/parser-markdown";
import prettierParserMeriyah from "prettier/parser-meriyah";
import prettierParserPostcss from "prettier/parser-postcss";
import prettierParserTypescript from "prettier/parser-typescript";
import prettierParserYaml from "prettier/parser-yaml";

self.acodePluginPrettier = {
    prettier,
    plugins: [
        prettierParserBabel,
        prettierParserGraphql,
        prettierParserAngular,
        prettierParserAspree,
        prettierParserFlow,
        prettierParserGlimmer,
        pretterParserHTML,
        prettierParserMd,
        prettierParserMeriyah,
        prettierParserPostcss,
        prettierParserTypescript,
        prettierParserYaml,
    ],
};

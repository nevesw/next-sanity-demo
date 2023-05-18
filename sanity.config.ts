import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({

    projectId: "sv40g74o",

    dataset: "production",

    title: "Meu Site CMS",

    apiVersion: "2023-05-17",

    basePath: "/admin",

    plugins: [deskTool()],

    schema: { types: schemas }
})

export default config;
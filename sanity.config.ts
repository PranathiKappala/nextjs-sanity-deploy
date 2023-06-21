// all things for sanity project

import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";// plugin to view the studio
import schemas from './sanity/schemas';

const config = defineConfig({
    projectId: "ymim5lfe",
    dataset: "production",
    title: "My Personal Website",
    apiVersion: "2023-06-17",
    basePath: "/admin",// where sanity studio route is
    plugins: [deskTool()],
    schema: { types: schemas}
})

export default config;

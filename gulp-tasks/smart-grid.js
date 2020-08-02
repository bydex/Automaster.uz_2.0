"use strict";

import gulp from "gulp";
const smartgrid = require("smart-grid");

gulp.task("smart-grid", (cb) => {
    smartgrid("./src/styles/vendor/import/", {
        outputStyle: "scss",
        filename: "_smart-grid",
        columns: 12, // number of grid columns
        offset: "30px",
        mobileFirst: false,
        mixinNames: {
            container: "container",
        },
        container: {
            fields: "15px",
            maxWidth: "1342px"
        },
        breakPoints: {
            xs: {
                width: "567px"
            },
            sm: {
                width: "768px"
            },
            md: {
                width: "968px"
            },
            lg: {
                width: "1366px"
            },
            xl: {
                width: "1920px"
            },
            xxl: {
                width: "2560px"
            },
        }
    });
    cb();
});

import React from "react";
import { Grid, LinearProgress, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const CustomLinearProgressUploaded = withStyles(theme => ({
  root: {
    borderRadius: 2,
    background:  "#7467ef",
  }
}))(LinearProgress);

const CustomLinearProgress = withStyles(theme => ({
  root: {
    borderRadius: 2,
    background:  "rgba(0, 0, 0, 0.1)",
  }
}))(LinearProgress);

const EgretProgressBar = ({
  checked = false,
  value = 75,
  color = "primary",
  text = "",
  spacing = 2,
  coloredText = false,
  className
}) => {
  return (
    <Grid container spacing={spacing} alignItems="center" className={className}>
      <Grid item xs={text ? 8 : 12}>
        { checked ? (
          <CustomLinearProgressUploaded
          color={color}
          value={value}
          valueBuffer={value}
          variant="determinate"
        >
        </CustomLinearProgressUploaded>
        ) : (
          <CustomLinearProgress
          color={color}
          value={value}
          valueBuffer={value}
          variant="determinate"
        >
        </CustomLinearProgress>
        )}
        
      </Grid>
      {text !== "" && (
        <Grid item xs={text ? 4 : false}>
          <Typography color={color}>
            <small className={`${coloredText ? "" : "text-muted"}`}>
              {text}
            </small>
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default EgretProgressBar;

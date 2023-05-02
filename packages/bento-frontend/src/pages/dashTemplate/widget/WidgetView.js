import React, { useCallback } from 'react';
import {
  Button,
  Collapse,
  FormControlLabel,
  Grid,
  Switch,
  withStyles,
} from '@material-ui/core';
import { useTheme } from '../../../components/ThemeContext';
import styles from './WidgetStyle';
import { WidgetGenerator } from '@bento-core/widgets';
import { widgetsData } from '../../../bento/dashboardData';
import colors from '../../../utils/colors';
import { getWidgetsInitData } from '../../dashboardTab/store/dashboardReducer';
import { Typography } from '../../../components/Wrappers/Wrappers';

const WidgetView = ({
  classes,
  data,
  theme,
}) => {
  const displayWidgets = getWidgetsInitData(data, widgetsData);
  const [collapse, setCollapse] = React.useState(true);
  const themeChanger = useTheme();
  const handleChange = () => setCollapse((prev) => !prev);
  console.log(widgetsData);
  console.log(displayWidgets);

  const widgetGeneratorConfig = {
    theme,
    DonutConfig: {
      colors,
      styles: {
        cellPadding: 2,
        textOverflowLength: 20,
        textColor: theme.palette.widgetBackground.contrastText,
      },
    },
    SunburstConfig: {
      styles: {
        textColor: theme.palette.widgetBackground.contrastText,
      },
    },
  };
  const { Widget } = useCallback(WidgetGenerator(widgetGeneratorConfig), []);

  return (
    <>
      <div className={classes.widgetsCollapse}>
        <div className={classes.floatLeft} />
        <div className={classes.floatRight}>
          <FormControlLabel
            control={(
              <Button className={classes.customButton} onClick={handleChange}>
                {collapse ? 'COLLAPSE VIEW' : 'OPEN VIEW'}
              </Button>
            )}
          />
          <Switch
            classes={{
              root: classes.switchRoot,
              switchBase: classes.switchBase,
              thumb: classes.thumb,
              track: classes.track,
              checked: classes.checked,
            }}
            className={classes.customSwitch}
            disableRipple
            onChange={() => {
              themeChanger.toggleTheme();
            }}
          />
        </div>
      </div>
      <Collapse in={collapse} className={classes.backgroundWidgets}>
        <Grid container>
          {widgetsData.slice(0, 6).map((widget, index) => {
            const dataset = displayWidgets[widget.dataName];
            if (!dataset || dataset.length === 0) {
              return <></>;
            }
            if (widget.type === 'sunburst' && (!dataset.children || !dataset.children.length)) {
              return <></>;
            }
            return (
              <Grid key={index} item lg={4} md={6} sm={12} xs={12}>
                <Widget
                  header={(
                    <Typography size="md" weight="normal" family="Nunito" color="lochmara">
                      {widget.title}
                    </Typography>
                  )}
                  bodyClass={classes.fullHeightBody}
                  className={classes.card}
                  bottomDivider
                  customBackGround
                  data={dataset}
                  chartType={widget.type}
                  sliceTitle={widget.sliceTitle}
                  chartTitleLocation="bottom"
                  chartTitleAlignment="center"
                />
              </Grid>
            );
          })}
        </Grid>
      </Collapse>
      {collapse && <div className={classes.dashboardDividerTop} />}
      {collapse && <div className={classes.dashboardDivider} />}
    </>
  );
};

export default withStyles(styles, { withTheme: true })(WidgetView);

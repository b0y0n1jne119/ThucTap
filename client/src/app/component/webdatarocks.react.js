import * as React from "react";
import ReactDOM from "react-dom";
import * as WebDataRocks from "webdatarocks";
import "webdatarocks/webdatarocks.min.css";

export class Pivot extends React.Component {
  webdatarocks;

  render() {
    return <div> Pivot </div>;
  }

  componentDidMount() {
    var config = {};
    config.container = ReactDOM.findDOMNode(this);
    this.parseProps(config);
    this.webdatarocks = new WebDataRocks(config);
  }

  shouldComponentUpdate() {
    return false;
  }

  componentWillUnmount() {
    this.webdatarocks.dispose();
  }

  parseProps(config) {
    if (this.props.toolbar !== undefined) {
      config.toolbar = this.props.toolbar;
    }
    if (this.props.width !== undefined) {
      config.width = this.props.width;
    }
    if (this.props.height !== undefined) {
      config.height = this.props.height;
    }
    if (this.props.report !== undefined) {
      config.report = this.props.report;
    }
    if (this.props.global !== undefined) {
      config.global = this.props.global;
    }
    if (this.props.customizeCell !== undefined) {
      config.customizeCell = this.props.customizeCell;
    }
    // events
    if (this.props.cellclick !== undefined) {
      config.cellclick = this.props.cellclick;
    }
    if (this.props.celldoubleclick !== undefined) {
      config.celldoubleclick = this.props.celldoubleclick;
    }
    if (this.props.dataerror !== undefined) {
      config.dataerror = this.props.dataerror;
    }
    if (this.props.datafilecancelled !== undefined) {
      config.datafilecancelled = this.props.datafilecancelled;
    }
    if (this.props.dataloaded !== undefined) {
      config.dataloaded = this.props.dataloaded;
    }
    if (this.props.datachanged !== undefined) {
      config.datachanged = this.props.datachanged;
    }
    if (this.props.fieldslistclose !== undefined) {
      config.fieldslistclose = this.props.fieldslistclose;
    }
    if (this.props.fieldslistopen !== undefined) {
      config.fieldslistopen = this.props.fieldslistopen;
    }
    if (this.props.filteropen !== undefined) {
      config.filteropen = this.props.filteropen;
    }
    if (this.props.fullscreen !== undefined) {
      config.fullscreen = this.props.fullscreen;
    }
    if (this.props.loadingdata !== undefined) {
      config.loadingdata = this.props.loadingdata;
    }
    if (this.props.loadinglocalization !== undefined) {
      config.loadinglocalization = this.props.loadinglocalization;
    }
    if (this.props.loadingreportfile !== undefined) {
      config.loadingreportfile = this.props.loadingreportfile;
    }
    if (this.props.localizationerror !== undefined) {
      config.localizationerror = this.props.localizationerror;
    }
    if (this.props.localizationloaded !== undefined) {
      config.localizationloaded = this.props.localizationloaded;
    }
    if (this.props.openingreportfile !== undefined) {
      config.openingreportfile = this.props.openingreportfile;
    }
    if (this.props.querycomplete !== undefined) {
      config.querycomplete = this.props.querycomplete;
    }
    if (this.props.queryerror !== undefined) {
      config.queryerror = this.props.queryerror;
    }
    if (this.props.ready !== undefined) {
      config.ready = this.props.ready;
    }
    if (this.props.reportchange !== undefined) {
      config.reportchange = this.props.reportchange;
    }
    if (this.props.reportcomplete !== undefined) {
      config.reportcomplete = this.props.reportcomplete;
    }
    if (this.props.reportfilecancelled !== undefined) {
      config.reportfilecancelled = this.props.reportfilecancelled;
    }
    if (this.props.reportfileerror !== undefined) {
      config.reportfileerror = this.props.reportfileerror;
    }
    if (this.props.reportfileloaded !== undefined) {
      config.reportfileloaded = this.props.reportfileloaded;
    }
    if (this.props.runningquery !== undefined) {
      config.runningquery = this.props.runningquery;
    }
    if (this.props.update !== undefined) {
      config.update = this.props.update;
    }
    if (this.props.beforetoolbarcreated !== undefined) {
      config.beforetoolbarcreated = this.props.beforetoolbarcreated;
    }
  }
}

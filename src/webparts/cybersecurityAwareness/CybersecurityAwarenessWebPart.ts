import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import CybersecurityAwareness from "./components/CybersecurityAwareness";

export interface ICybersecurityAwarenessWebPartProps {}

export default class CybersecurityAwarenessWebPart extends BaseClientSideWebPart<ICybersecurityAwarenessWebPartProps> {
  public render(): void {
    ReactDom.render(
      React.createElement(CybersecurityAwareness),
      this.domElement,
    );
  }
  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }
  protected get dataVersion(): Version {
    return Version.parse("1.0");
  }
}

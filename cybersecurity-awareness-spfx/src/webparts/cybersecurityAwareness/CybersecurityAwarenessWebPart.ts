import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import CybersecurityAwareness from './components/CybersecurityAwareness';
import { ICybersecurityAwarenessProps } from './components/ICybersecurityAwarenessProps';

export interface ICybersecurityAwarenessWebPartProps { description: string; }
export default class CybersecurityAwarenessWebPart extends BaseClientSideWebPart<ICybersecurityAwarenessWebPartProps> {
  public render(): void {
    const element = React.createElement<ICybersecurityAwarenessProps>(CybersecurityAwareness, { description: this.properties.description });
    ReactDom.render(element, this.domElement);
  }
  protected onDispose(): void { ReactDom.unmountComponentAtNode(this.domElement); }
  protected get dataVersion(): Version { return Version.parse('1.0'); }
}

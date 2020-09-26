import {SgnwSymbol} from '../../../dist/collection/components/sgnw-symbol/sgnw-symbol';
import docs from './sgnw-symbol.docs.mdx';
import { action } from '@storybook/addon-actions';
import { h } from 'jsx-dom';

export default {
  title: 'sgnw-components/Component/sgnw-symbol',
  component: SgnwSymbol,
  parameters: { 
    docs: { page: docs }
  }
};

//import { Checked, Unchecked, Unassigned } from '../Task.stories';
//const Template = (args) => <sgnw-symbol {...arg} />;

//export const Basic = Template.bind({});
//Basic.args = { items: [
//  Checked.args, Checked.args, Unchecked.args, Unassigned.args
//]};

export const FSW = (args) => (
<ion-app>
  <ion-header>
    <ion-toolbar>
      <ion-title>Formal SignWriting in ASCII (FSW)</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content class="ion-padding">
    <sgnw-symbol fsw={args.fsw} styling={args.styling} />
    <pre><code>&lt;sgnw-symbol fsw="{args.fsw}" styling="{args.styling}" /&gt;</code></pre>
  </ion-content>
</ion-app>
);
FSW.args = {
  fsw: 'S10000',
  styling: '',
  onClick: action('clicked')
};

export const SWU = (args) => (
<ion-app>
  <ion-header>
    <ion-toolbar>
      <ion-title>SignWriting in Unicode (SWU)</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content class="ion-padding">
    <sgnw-symbol {...args} />
    <pre><code>&lt;sgnw-symbol swu="{args.swu}" styling="{args.styling}" /&gt;</code></pre>
  </ion-content>
</ion-app>
);
SWU.args = {
  swu: '񄵡',
  styling: '',
  onClick: action('clicked')
};

export const ISWA = (args) => (
<ion-app>
  <ion-header>
    <ion-toolbar>
      <ion-title>ISWA 2010 ID</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content class="ion-padding">
    <sgnw-symbol {...args} />
    <pre><code>&lt;sgnw-symbol iid="{args.iid}" styling="{args.styling}" /&gt;</code></pre>
  </ion-content>
</ion-app>
);
ISWA.args = {
  iid: 1,
  styling: '',
  onClick: action('clicked')
};

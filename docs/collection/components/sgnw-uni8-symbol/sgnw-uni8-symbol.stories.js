import {SgnwUni8Symbol} from '../../../dist/collection/components/sgnw-uni8-symbol/sgnw-uni8-symbol';
import docs from './sgnw-uni8-symbol.docs.mdx';
import { action } from '@storybook/addon-actions';
import { convert } from '@sutton-signwriting/unicode8';
import { h } from 'jsx-dom';

export default {
  title: 'sgnw-components/Component/sgnw-uni8-symbol',
  component: SgnwUni8Symbol,
  parameters: { 
    docs: { page: docs }
  }
};

export const Base = (args) => (
  <ion-app>
    <ion-header>
      <ion-toolbar>
        <ion-title>SignWriting in Unicode 8 (uni8) base</ion-title>
      </ion-toolbar>
    </ion-header>
  
    <ion-content class="ion-padding">
      <sgnw-uni8-symbol {...args} />
      <pre><code class="uni8">&lt;sgnw-uni8-symbol uni="{args.uni}" /&gt;</code></pre>
    </ion-content>
  </ion-app>
);
Base.args = {
  uni: convert.fsw2uni("S10000"),
  onClick: action('clicked')
};

export const Base_Fill = (args) => (
  <ion-app>
    <ion-header>
      <ion-toolbar>
        <ion-title>SignWriting in Unicode 8 (uni8) base</ion-title>
      </ion-toolbar>
    </ion-header>
  
    <ion-content class="ion-padding">
      <sgnw-uni8-symbol {...args} />
      <pre><code class="uni8">&lt;sgnw-uni8-symbol uni="{args.uni}" /&gt;</code></pre>
    </ion-content>
  </ion-app>
);
Base_Fill.args = {
  uni: convert.fsw2uni("S10010"),
  onClick: action('clicked')
};

export const Base_Rotation = (args) => (
  <ion-app>
    <ion-header>
      <ion-toolbar>
        <ion-title>SignWriting in Unicode 8 (uni8) base</ion-title>
      </ion-toolbar>
    </ion-header>
  
    <ion-content class="ion-padding">
      <sgnw-uni8-symbol {...args} />
      <pre><code class="uni8">&lt;sgnw-uni8-symbol uni="{args.uni}" /&gt;</code></pre>
    </ion-content>
  </ion-app>
);
Base_Rotation.args = {
  uni: convert.fsw2uni("S10001"),
  onClick: action('clicked')
};

export const Base_Both = (args) => (
  <ion-app>
    <ion-header>
      <ion-toolbar>
        <ion-title>SignWriting in Unicode 8 (uni8) base</ion-title>
      </ion-toolbar>
    </ion-header>
  
    <ion-content class="ion-padding">
      <sgnw-uni8-symbol {...args} />
      <pre><code class="uni8">&lt;sgnw-uni8-symbol uni="{args.uni}" /&gt;</code></pre>
    </ion-content>
  </ion-app>
);
Base_Both.args = {
  uni: convert.fsw2uni("S10011"),
  onClick: action('clicked')
};

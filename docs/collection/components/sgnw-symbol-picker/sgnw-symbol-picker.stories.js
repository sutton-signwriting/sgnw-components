import {SgnwSymbolPicker} from '../../../dist/collection/components/sgnw-symbol-picker/sgnw-symbol-picker';
import docs from './sgnw-symbol-picker.docs.mdx';
import { action } from '@storybook/addon-actions';
import { h } from 'jsx-dom';

export default {
  title: 'sgnw-components/Component/sgnw-symbol-picker',
  component: SgnwSymbolPicker,
  parameters: { 
    docs: { page: docs }
  }
};

//import { Checked, Unchecked, Unassigned } from '../Task.stories';
//const Template = (args) => <sgnw-symbol-picker {...arg} />;

//export const Basic = Template.bind({});
//Basic.args = { items: [
//  Checked.args, Checked.args, Unchecked.args, Unassigned.args
//]};

export const FSW = (args) => (
  <div>
    <h2>Formal SignWriting in ASCII (FSW)</h2>
    <sgnw-symbol-picker {...args} />
    <pre><code>&lt;sgnw-symbol-picker fsw="{args.fsw}" /&gt;</code></pre>
  </div>
);
FSW.args = {
  fsw: 'S10000',
  onClick: action('clicked')
};

export const SWU = (args) => (
  <div>
    <h2>SignWriting in Unicode (SWU)</h2>
    <sgnw-symbol-picker {...args} />
    <pre><code>&lt;sgnw-symbol-picker swu="{args.swu}" /&gt;</code></pre>
  </div>
);
SWU.args = {
  swu: '񄵡',
  onClick: action('clicked')
};

export const ISWA = (args) => (
  <div>
    <h2>ISWA 2010 ID</h2>
    <sgnw-symbol-picker {...args} />
    <pre><code>&lt;sgnw-symbol-picker iid="{args.iid}" /&gt;</code></pre>
  </div>
);
ISWA.args = {
  iid: 1,
  onClick: action('clicked')
};

export const Uni8 = (args) => (
  <div>
    <h2>SignWriting in Unicode 8 (uni8)</h2>
    <sgnw-symbol-picker {...args} />
    <pre><code>&lt;sgnw-symbol-picker uni="{args.uni}" /&gt;</code></pre>
  </div>
);
Uni8.args = {
  uni: "𝣎𝪛𝪯",
  onClick: action('clicked')
};

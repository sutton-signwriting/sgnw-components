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
  <div>
    <h2>Formal SignWriting in ASCII (FSW)</h2>
    <h2><sgnw-symbol {...args} /></h2>
    <pre><code>&lt;sgnw-symbol fsw="{args.fsw}" styling="{args.styling}" /&gt;</code></pre>
  </div>
);
FSW.args = {
  fsw: 'S10000',
  styling: '',
  onClick: action('clicked')
};

export const SWU = (args) => (
  <div>
    <h2>SignWriting in Unicode (SWU)</h2>
    <h2><sgnw-symbol {...args} /></h2>
    <pre><code>&lt;sgnw-symbol swu="{args.swu}" styling="{args.styling}" /&gt;</code></pre>
  </div>
);
SWU.args = {
  swu: '񄵡',
  styling: '',
  onClick: action('clicked')
};

export const ISWA = (args) => (
  <div>
    <h2>ISWA 2010 ID</h2>
    <h2><sgnw-symbol {...args} /></h2>
    <pre><code>&lt;sgnw-symbol iid="{args.iid}" styling="{args.styling}" /&gt;</code></pre>
  </div>
);
ISWA.args = {
  iid: 1,
  styling: '',
  onClick: action('clicked')
};

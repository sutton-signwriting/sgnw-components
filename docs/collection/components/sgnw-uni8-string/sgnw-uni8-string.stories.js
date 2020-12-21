import {SgnwUni8String} from '../../../dist/collection/components/sgnw-uni8-string/sgnw-uni8-string';
import docs from './sgnw-uni8-string.docs.mdx';
import { action } from '@storybook/addon-actions';
import { convert } from '@sutton-signwriting/unicode8';
import { parse } from '@sutton-signwriting/unicode8/string';
import { h } from 'jsx-dom';

export default {
  title: 'sgnw-components/Component/sgnw-uni8-string',
  component: SgnwUni8String,
  parameters: { 
    docs: { page: docs }
  }
};

let head = convert.fsw2uni("S2ff00");
let eyes = convert.fsw2uni("S30a00")
let eye = convert.fsw2uni("S30a10")
let nose = convert.fsw2uni("S33100")
let smile = convert.fsw2uni("S34000")

export const Head = (args) => (
  <div>
    <h2>SignWriting in Unicode 8 (uni8) head</h2>
    <h2><sgnw-uni8-string {...args} /></h2>
    <pre><code class="uni8">&lt;sgnw-uni8-string uni="{args.uni}" /&gt;</code></pre>
  </div>
);
Head.args = {
  uni: head,
  onClick: action('clicked')
};

export const Head_Eyes_Smile = (args) => (
  <div>
    <h2>SignWriting in Unicode 8 (uni8) head eyes smile</h2>
    <h2><sgnw-uni8-string {...args} /></h2>
    <pre><code class="uni8">&lt;sgnw-uni8-string uni="{args.uni}" /&gt;</code></pre>
  </div>
);
Head_Eyes_Smile.args = {
  uni: head + eyes + smile,
  onClick: action('clicked')
};

export const Head_Eye_Smile = (args) => (
  <div>
    <h2>SignWriting in Unicode 8 (uni8) head eye smile</h2>
    <h2><sgnw-uni8-string {...args} /></h2>
    <pre><code class="uni8">&lt;sgnw-uni8-string uni="{args.uni}" /&gt;</code></pre>
  </div>
);
Head_Eye_Smile.args = {
  uni: head + eye + smile,
  onClick: action('clicked')
};

export const All = (args) => (
  <div>
    <h2>SignWriting in Unicode 8 (uni8) all</h2>
    <h2><sgnw-uni8-string {...args} /></h2>
    <pre><code class="uni8">&lt;sgnw-uni8-string uni="{args.uni}" /&gt;</code></pre>
  </div>
);
All.args = {
  uni: head + eye + nose + smile,
  onClick: action('clicked')
};

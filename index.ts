import { createDevApp } from '@backstage/dev-utils';
import { commentPlugin } from '../src/plugin';

createDevApp().registerPlugin(commentPlugin).render();

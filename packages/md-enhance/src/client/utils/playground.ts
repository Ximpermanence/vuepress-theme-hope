import { deepMerge } from "vuepress-shared/client";

import type { VuePlaygroundOptions } from "../../shared/index.js";

declare const VUE_PLAYGROUND_OPTIONS: VuePlaygroundOptions;

export const getVuePlaygroundSettings = (
  settings: string
): VuePlaygroundOptions =>
  deepMerge(
    {},
    VUE_PLAYGROUND_OPTIONS,
    <VuePlaygroundOptions>JSON.parse(decodeURIComponent(settings))
  );

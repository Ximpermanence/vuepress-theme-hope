import { useLocaleConfig } from "@mr-hope/vuepress-shared/lib/client";
import { ExternalLinkIcon } from "@vuepress/plugin-external-link-icon/lib/client";
import { defineComponent, h } from "vue";

import { componentLocales } from "../define";

import type { VNode } from "vue";

export default defineComponent({
  name: "ExternalLinkIcon",

  setup() {
    const componentLocale = useLocaleConfig(componentLocales);

    return (): VNode =>
      h(ExternalLinkIcon, {
        default: () =>
          h(
            "span",
            { class: "sr-only" },
            componentLocale.value.openInNewWindow
          ),
      });
  },
});

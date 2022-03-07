import { useEditorStore } from "@/stores/editor";
import { defineComponent, onMounted, ref, watch } from "vue";
import "./index.css";
import { iframeIo, IframeIoType } from "../iframe.io";

// iframe store 无法直接通信
export default defineComponent({
  setup() {
    const editorStore = useEditorStore();

    // main 容器
    const mainElement = ref<Element>();

    // 当前选中的元素
    const checkedElement = ref<HTMLElement>();

    // 当前鼠标移上的元素
    const overElement = ref<HTMLElement>();

    watch(checkedElement, (val) =>
      iframeIo.editorToSide(window, {
        className: val?.className,
        tagName: val?.tagName,
        innerText: val?.innerText,
      })
    );

    const isEnter = ref<boolean>(false);

    const ondrop = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
      isEnter.value = false;
      // editorStore.add();
      console.log(e, "drop");
    };

    const ondragover = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
    };

    const ondragenter = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();

      if (!editorStore.wrapElement?.children.length) {
        isEnter.value = true;
      }
    };

    const ondragleave = () => {
      isEnter.value = false;
    };

    onMounted(() => {
      iframeIo.on(IframeIoType.component, (data) => {
        editorStore.addNode(data as string);
      });

      // 修改属性
      iframeIo.on(IframeIoType.sideToEditor, (className) => {
        editorStore.changeClassName(
          checkedElement.value?.getAttribute("data-uuid") || "",
          className as string
        );
      });

      mainElement.value?.addEventListener("mouseover", (e) => {
        const el = e.target as HTMLElement;
        if (el.id === "iframe-main") return;
        overElement.value = el;
      });

      mainElement.value?.addEventListener("mouseleave", (e) => {
        overElement.value = undefined;
      });

      mainElement.value?.addEventListener("click", (e) => {
        const el = e.target as HTMLElement;
        if (el.id === "iframe-main") return;
        checkedElement.value = el;
        overElement.value = undefined;
      });

      mainElement.value && editorStore.init(mainElement.value);
    });

    watch(editorStore, (val) => {
      const el = val.wrapElement;
      if (mainElement.value) {
        mainElement.value.innerHTML = el?.innerHTML || "";
      }
    });

    const add = () => {
      editorStore.addNode(`<h1 class="text-center">Hello World</h1>`);
    };

    return () => (
      <>
        <main
          ref={mainElement}
          onDrop={ondrop}
          onDragenter={ondragenter}
          onDragleave={ondragleave}
          onDragover={ondragover}
          id="iframe-main"
          class={`w-screen h-screen border-primary rounded-b-xl cursor-default relative z-10 ${
            isEnter.value ? "border-2" : "border-0"
          }`}
        ></main>
        {renderOverElementMask(overElement.value)}
        {renderCheckedElementMask(checkedElement.value)}
      </>
    );
  },
});

// 移上元素状态显示
const renderOverElementMask = (el: HTMLElement | undefined) => {
  return (
    el && (
      <div
        class="over-element"
        style={{
          left: el.offsetLeft + "px",
          width: el.clientWidth + "px",
          top: el.offsetTop + "px",
          height: el.clientHeight + "px",
        }}
      />
    )
  );
};

// 移上元素状态显示
const renderCheckedElementMask = (el: HTMLElement | undefined) => {
  return (
    el && (
      <div
        class="checked-element"
        style={{
          left: el.offsetLeft + "px",
          width: el.clientWidth + "px",
          top: el.offsetTop + "px",
          height: el.clientHeight + "px",
        }}
      />
    )
  );
};

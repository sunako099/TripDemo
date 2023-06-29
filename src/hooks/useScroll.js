import { onMounted, onUnmounted } from "vue";
import { ref } from "vue";
import {throttle} from 'underscore'

export default function useScroll() {
  const isReachBottom = ref(false);
  const scrollTop = ref(0);
  const scrollHeight = ref(0);
  const clientHeight = ref(0);

  const scrollListenerHandler=throttle(()=> {
    clientHeight.value = document.documentElement.clientHeight;
    scrollTop.value = document.documentElement.scrollTop;
    scrollHeight.value = document.documentElement.scrollHeight;
    let distance = 80; //距离视窗还用80的时候，开始触发；
    if (clientHeight.value + scrollTop.value >= scrollHeight.value - distance) {
      console.log("底部");
      isReachBottom.value = true;
    }
  },1000)

  onMounted(() => {
    window.addEventListener("scroll", scrollListenerHandler);
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", scrollListenerHandler);
  });

  return { isReachBottom,clientHeight,scrollHeight,scrollTop };
}

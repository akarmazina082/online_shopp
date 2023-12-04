<template>
  <div class="v-popup">
    <div class="v-popup__wrapper" ref="popup_wrapper">
      <span>{{ popupTitle }}</span>
      <span>
        <i class="material-icons" @click="closePopup">close</i>
      </span>
    </div>
    <div class="v-popup__content">
      <slot></slot>
    </div>
    <div class="v-popup__footer">
      <button class="close_modal" @click="closePopup">Close</button>
      <button class="submit_btn" @click="righBtnAction">{{ rightBtnTitle }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-popup",
  props: {
    popupTitle: {
      type: String,
      default: 'Popup name'
    },
    rightBtnTitle: {
      type: String,
      default: 'ok'
    }
  },
  data() {
    return {}
  },
  methods: {
    righBtnAction() {
      this.$emit('rightBtnAction')
    },
    closePopup() {
      this.$emit('closePopup')
    }
  },
  mounted() {
    let vm = this;
    document.addEventListener('click', function (item) {
      if (item.target === vm.$refs['popup_wrapper']) {
        vm.closePopup()
      }
    })
  },
}
</script>


<style >
.popup_wrapper {
  background: rgba(64, 64, 64, .4);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
}

.v-popup {
  padding: 16px;
  position: fixed;
  top: 50px;
  width: 400px;
  background: #ffffff;
  box-shadow: 0 0 17px 0 #e7e7e7;
  z-index: 10;
}

.header,
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.submit_btn {
  padding: 8px;
  color: #ffffff;
  background: #26ae68;
}

.close_modal {
  padding: 8px;
  color: #ffffff;
  background: red;
}</style>
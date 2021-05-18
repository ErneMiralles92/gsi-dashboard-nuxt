<template>
  <div class="app-row ma-n2">
    <div class="app-column col-12 col-sm-8 pa-2">
      <AppCard class="app-row" width="100%">
        <div class="app-column pl-2">
          <div class="app-row mb-2">
            <h3 class="text-title">New Transaction</h3>
          </div>
          <div class="app-row app-justify-space-between ma-n1 app-align-end">
            <AppSlider :icon-color="$colors.blue">
              <div class="app-row mx-n2 px-2">
                <div
                  v-for="(user, index) in users"
                  :key="user.username"
                  class="app-column ma-1 app-align-center pa-1"
                  style="cursor: pointer"
                  :class="{
                    'selected-user': selectedUserIndex === index,
                  }"
                  @click="selectUser(index)"
                >
                  <div class="avatar">
                    <img
                      v-if="user.image"
                      :src="user.image"
                      :alt="'username'"
                    />
                    <AppIcon v-else size="40">mdi-account-circle</AppIcon>
                  </div>
                  <span class="text-caption mt-1">{{ user.name }}</span>
                </div>
              </div>
            </AppSlider>

            <div class="app-column ma-1 app-align-center">
              <AppButton icon :color="$colors.orange" class="mb-1">
                <AppIcon>mdi-plus</AppIcon>
              </AppButton>
              <span class="text-caption mt-1">Add new</span>
            </div>
          </div>
          <div class="app-row mt-2 app-align-center mx-n2">
            <div class="app-column col-12 col-sm-6 pa-2 app-align-start">
              <AppInput v-model="amount" placeholder="0" type="tel">
                <template slot="append">
                  <AppIcon color="#9E9E9E">mdi-currency-usd</AppIcon>
                </template>
              </AppInput>
            </div>
            <div class="app-column pa-2">
              <AppButton
                class="font-weight-bold"
                :color="$colors.orange"
                border-radius="12px"
                :disabled="disableTransfer"
                @click="send"
              >
                <span class="py-2 text-caption"> Send transfer </span>
                <AppIcon size="20" class="ml-2"> mdi-chevron-right </AppIcon>
              </AppButton>
            </div>
          </div>
        </div>
      </AppCard>
    </div>
    <div class="app-column col-12 col-sm-4 pa-2">
      <AppCard
        class="app-column loan-card"
        :color="$colors.red"
        min-height="180"
        width="160"
        hover
      >
        <div class="app-row">
          <AppIcon color="rgb(209,88,66)" size="56"> mdi-cloud </AppIcon>
          <AppIcon color="rgb(209,88,66)" size="32" class="ml-2">
            mdi-cloud
          </AppIcon>
        </div>
        <div class="app-row app-justify-center">
          <AppIcon
            class="cash-icon cash-icon-rotated-right"
            color="rgb(237,101,76)"
            background-color="rgb(209,88,66)"
          >
            mdi-currency-usd
          </AppIcon>
        </div>
        <div class="app-row">
          <AppIcon
            class="cash-icon cash-icon-rotated-left"
            color="rgb(237,101,76)"
            size="32"
            background-color="rgb(209,88,66)"
          >
            mdi-currency-usd
          </AppIcon>
        </div>

        <div class="app-column fill-height app-justify-end">
          <div class="app-row">
            <span class="text-title app-text-left" style="color: white"
              >Get great loan!</span
            >
            <AppIcon color="white"> mdi-chevron-right </AppIcon>
          </div>
        </div>
      </AppCard>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      amount: '',
      selectedUserIndex: -1,
    }
  },
  computed: {
    disableTransfer() {
      return !this.amount || this.amount <= 0 || this.selectedUserIndex === -1
    },
  },
  methods: {
    send() {
      this.selectedUserIndex = -1
      this.amount = ''
    },
    selectUser(index) {
      if (index === this.selectedUserIndex) this.selectedUserIndex = -1
      else this.selectedUserIndex = index
    },
  },
}
</script>

<style scoped>
.avatar {
  align-items: center;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  line-height: normal;
  position: relative;
  text-align: center;
  vertical-align: middle;
  overflow: hidden;
  height: 40px;
  width: 40px;
}

.avatar img {
  border-radius: inherit;
  display: inline-flex;
  height: inherit;
  width: inherit;
}

.cash-icon {
  border-radius: 50%;
}

.cash-icon-rotated-left {
  transform: rotate(-45deg);
}
.cash-icon-rotated-right {
  transform: rotate(45deg);
}

.loan-card {
  padding-top: 0;
  padding-bottom: 8px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.selected-user {
  box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%),
    0 1px 5px 0 rgb(0 0 0 / 12%);
  border-radius: 8px;
  border: solid 1px #1976d2;
}
</style>

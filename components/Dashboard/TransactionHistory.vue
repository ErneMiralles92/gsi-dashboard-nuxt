<template>
  <AppCard class="app-row" width="100%" style="padding-left: 24px">
    <div class="app-column col-12">
      <div class="app-row">
        <h3 class="text-title">Transaction History</h3>
      </div>
      <div class="app-table">
        <div class="app-table-wrapper">
          <table class="text-caption">
            <thead class="grey-text">
              <tr>
                <th v-for="header in headers" :key="`thead-${header.value}`">
                  {{ header.text }}
                </th>
              </tr>
            </thead>
            <tbody class="app-table-body">
              <tr v-for="item in items" :key="item.id">
                <td
                  v-for="header in headers"
                  :key="`${item.id}-td-${header.value}`"
                >
                  <AppIcon
                    v-if="header.value === 'receiver'"
                    small
                    class="mr-2"
                    color="#616161"
                    background-color="#EEEEEE"
                    style="border-radius: 8px; padding: 4px"
                  >
                    {{ item.icon }}
                  </AppIcon>
                  <span :class="header.class">
                    {{ item[header.value] }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </AppCard>
</template>

<script>
export default {
  props: {
    transactions: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      transactionIcon: {
        shopping: 'mdi-cart',
        food: 'mdi-food',
        sport: 'mdi-football',
      },
      transactionName: {
        shopping: 'Shopping',
        food: 'Food',
        sport: 'Sport',
      },
    }
  },
  computed: {
    headers() {
      return [
        {
          value: 'receiver',
          text: 'Receiver',
        },
        {
          value: 'type',
          text: 'Type',
          class: 'grey-text',
        },
        {
          value: 'date',
          text: 'Date',
          class: 'grey-text',
        },
        {
          value: 'amount',
          text: 'Amount',
          class: 'font-weight-bold',
        },
      ]
    },
    items() {
      return this.transactions.map((transaction) => ({
        ...transaction,
        type: this.transactionName[transaction.type],
        icon: this.transactionIcon[transaction.type],
        date: new Date(transaction.date).toDateString().slice(4),
        amount: `$${parseFloat(transaction.amount).toFixed(2)}`,
      }))
    },
  },
}
</script>

<style scoped>
.app-table {
  max-width: 100%;
  text-align: left;
}
.app-table-body {
  width: 100%;
  height: 100%;
  overflow: auto;
}
.app-table-wrapper {
  overflow-x: auto;
  overflow-y: hidden;
}
.app-table th {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 0.75rem;
  height: 48px;
}

.app-table tbody td {
  border-bottom: thin solid rgba(0, 0, 0, 0.12);
}

.app-table td,
.app-table th {
  padding: 8px 16px;
}
.app-table td:first-child,
.app-table th:first-child {
  padding-left: 0px;
}
.app-table td:last-child,
.app-table th:last-child {
  padding-right: 0px;
}

table {
  width: 100%;
  border-spacing: 0;
}
</style>

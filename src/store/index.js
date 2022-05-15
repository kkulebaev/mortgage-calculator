import { createStore, createLogger } from 'vuex'

export default createStore({
  plugins: [createLogger()],

  // ================================ STATE ============================================= //

  state: {
    typeOfMort: 'an', //dif
    mortAmount: 70000,
    annualInterestRate: 22,
    termInMonth: 12,
    initFee: 20000,
    table: [
      { id: 1, tdMonPay: 4680, repayPer: 917, repayBody: 3763, debtEnd: 46237 },
      { id: 2, tdMonPay: 4680, repayPer: 848, repayBody: 3832, debtEnd: 42405 },
      { id: 3, tdMonPay: 4680, repayPer: 777, repayBody: 3902, debtEnd: 38503 },
      { id: 4, tdMonPay: 4680, repayPer: 706, repayBody: 3974, debtEnd: 34529 },
      { id: 5, tdMonPay: 4680, repayPer: 633, repayBody: 4047, debtEnd: 30482 },
      { id: 6, tdMonPay: 4680, repayPer: 559, repayBody: 4121, debtEnd: 26361 },
      { id: 7, tdMonPay: 4680, repayPer: 483, repayBody: 4196, debtEnd: 22165 },
      { id: 8, tdMonPay: 4680, repayPer: 406, repayBody: 4273, debtEnd: 17891 },
      { id: 9, tdMonPay: 4680, repayPer: 328, repayBody: 4352, debtEnd: 13540 },
      { id: 10, tdMonPay: 4680, repayPer: 248, repayBody: 4431, debtEnd: 9108 },
      { id: 11, tdMonPay: 4680, repayPer: 167, repayBody: 4513, debtEnd: 4595 },
      { id: 12, tdMonPay: 4680, repayPer: 84, repayBody: 4595, debtEnd: 0 },
    ],
  },

  // ================================ GETTERS ============================================= //

  getters: {
    typeOfMort: (state) => state.typeOfMort,
    mortAmount: (state) => state.mortAmount,
    annualInterestRate: (state) => state.annualInterestRate,
    termInMonth: (state) => state.termInMonth,
    initFee: (state) => state.initFee,
    table: (state) => state.table,

    bodyMort: (state) => state.mortAmount - state.initFee,
    interestPerMonth: (state) => state.annualInterestRate / 100 / 12,
    overpayment: (state, getters) => getters.totalSum - state.mortAmount,
    monthlyPayment: (state) => state.table[0].tdMonPay,

    totalSum(state) {
      let totalSum = state.initFee

      for (let i = 0; i < state.table.length; i++) {
        totalSum += state.table[i].tdMonPay
      }

      return Math.round(totalSum)
    },
  },

  // ================================ MUTATIONS ============================================= //

  mutations: {
    CHANGE_TYPE(state, type) {
      state.typeOfMort = type
    },
    CHANGE_MORT_AMOUNT(state, sum) {
      state.mortAmount = Number(sum)
    },
    CHANGE_PERCENT_YEAR(state, percentYear) {
      state.annualInterestRate = Number(percentYear)
    },
    CHANGE_TERM_MONTH(state, termMonth) {
      state.termInMonth = Number(termMonth)
    },
    CHANGE_INIT_FEE(state, initFee) {
      state.initFee = Number(initFee)
    },

    UPDATE_TABLE(state, newTable) {
      state.table = newTable
    },
  },

  // ================================ ACTIONS ============================================= //

  actions: {
    calcTable({ dispatch, commit, state }) {
      const nameAction = `${state.typeOfMort}CalcMort`

      dispatch(nameAction).then((res) => commit('UPDATE_TABLE', res))
    },

    anCalcMort({ getters }) {
      const bodyMort = getters.bodyMort
      const interestPerMonth = getters.interestPerMonth
      const termInMonth = getters.termInMonth
      const newAnTable = []

      //Считаем первый элемент таблицы и пушим его в массив
      let repayPer = Math.round(bodyMort * interestPerMonth)
      let tdMonPay = Math.round(bodyMort * (interestPerMonth + interestPerMonth / (Math.pow(1 + interestPerMonth, termInMonth) - 1)))
      let repayBody = Math.round(tdMonPay - repayPer)
      let debtEnd = Math.round(bodyMort - repayBody)

      newAnTable.push({ id: 1, tdMonPay, repayPer, repayBody, debtEnd })

      //Считаем остальные элементы таблицы и пушим их в массив
      for (let i = 1; i < termInMonth; i++) {
        repayPer = Math.round(newAnTable[i - 1].debtEnd * interestPerMonth)
        tdMonPay = Math.round(bodyMort * (interestPerMonth + interestPerMonth / (Math.pow(1 + interestPerMonth, termInMonth) - 1)))
        repayBody = Math.round(tdMonPay - repayPer)
        debtEnd = Math.round(newAnTable[i - 1].debtEnd - repayBody)

        newAnTable.push({ id: i + 1, tdMonPay, repayPer, repayBody, debtEnd })
      }

      return newAnTable
    },

    difCalcMort({ getters }) {
      const bodyMort = getters.bodyMort
      const interestPerMonth = getters.interestPerMonth
      const termInMonth = getters.termInMonth
      const newDifTable = []

      //Считаем первый элемент таблицы и пушим его в массив
      let repayPer = Math.round(bodyMort * interestPerMonth)
      let repayBody = Math.round(bodyMort / termInMonth)
      let tdMonPay = Math.round(repayPer + repayBody)
      let debtEnd = Math.round(bodyMort - repayBody)

      newDifTable.push({ id: 1, tdMonPay, repayPer, repayBody, debtEnd })

      //Считаем остальные элементы таблицы и пушим их в массив
      for (let i = 1; i < termInMonth; i++) {
        repayPer = Math.round(newDifTable[i - 1].debtEnd * interestPerMonth)
        repayBody = Math.round(bodyMort / termInMonth)
        tdMonPay = Math.round(repayPer + repayBody)
        debtEnd = Math.round(newDifTable[i - 1].debtEnd - repayBody)

        newDifTable.push({ id: i + 1, tdMonPay, repayPer, repayBody, debtEnd })
      }

      return newDifTable
    },
  },
})

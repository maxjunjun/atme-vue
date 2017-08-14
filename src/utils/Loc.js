/*
 * 角色
 * */
const ROLE = 'role'

export function setRole (val) {
  set(ROLE, val)
}

export function getRole () {
  return get(ROLE)
}

export function clearRole () {
  clear(ROLE)
}

/*
 * 签约主体
 * */
const SIGNING_SUBJECT = 'signingSubject'

export function setSigningSubject (val) {
  set(SIGNING_SUBJECT, val)
}

export function getSigningSubject () {
  return get(SIGNING_SUBJECT)
}

export function clearSigningSubject () {
  clear(SIGNING_SUBJECT)
}

/*
 * 客户名称
 * */
const CUSTOMER_NAME = 'customerName'

export function setCustomerName (val) {
  set(CUSTOMER_NAME, val)
}

export function getCustomerName () {
  return get(CUSTOMER_NAME)
}

export function clearCustomerName () {
  clear(CUSTOMER_NAME)
}

/*
 * 选择产品
 * */
const SELECT_PRODUCT = 'selectProduct'

export function setSelectProduct (val) {
  set(SELECT_PRODUCT, val)
}

export function getSelectProduct () {
  return get(SELECT_PRODUCT)
}

export function clearSelectProduct () {
  clear(SELECT_PRODUCT)
}

/*
 * 主管合伙人
 * */
const PARTNER = 'partner'

export function setPartner (val) {
  set(PARTNER, val)
}

export function getPartner () {
  return get(PARTNER)
}

export function clearPartner () {
  clear(PARTNER)
}

/*
 * 项目经理
 * */
const PROJECT_MANAGER = 'projectManager'

export function setProjectManager (val) {
  set(PROJECT_MANAGER, val)
}

export function getProjectManager () {
  return get(PROJECT_MANAGER)
}

export function clearProjectManager () {
  clear(PROJECT_MANAGER)
}

/*
 * 负责人
 * */
const MANAGER = 'manager'

export function setManager (val) {
  set(MANAGER, val)
}

export function getManager () {
  return get(MANAGER)
}

export function clearManager () {
  clear(MANAGER)
}

/*
 * 选中客户联系人
 * */
const LIST_CRM_LINK_MAN = 'listCRMLinkman'

export function setListCRMLinkman (val) {
  set(LIST_CRM_LINK_MAN, val)
}

export function getListCRMLinkman () {
  return get(LIST_CRM_LINK_MAN)
}

export function clearListCRMLinkman () {
  clear(LIST_CRM_LINK_MAN)
}

/*
 * 是否有提交操作
 * */
const SUBMIT = 'submit'    // 是否有提交操作
export function setSubmit (val) {
  set(SUBMIT, val)
}
export function getSubmit () {
  return get(SUBMIT)
}
export function clearSubmit () {
  clear(SUBMIT)
}

/*
 * 新建项目
 * */
const NEW_PROJECT = 'newProject'
export function setNewProject (val) {
  set(NEW_PROJECT, val)
}
export function getNewProject () {
  return get(NEW_PROJECT)
}
export function clearNewProject () {
  clear(NEW_PROJECT)
}

/*
 * 自定义任务
 * */
const NEW_TASK = 'newTask'
export function setNewTask (val) {
  set(NEW_TASK, val)
}
export function getNewTask () {
  return get(NEW_TASK)
}
export function clearNewTask () {
  clear(NEW_TASK)
}

const REMIND_TIME_LIST = 'remindTimeList'
export function setRemindTime (val) {
  set(REMIND_TIME_LIST, val)
}
export function getRemindTime () {
  return get(REMIND_TIME_LIST)
}
export function clearRemindTime () {
  clear(REMIND_TIME_LIST)
}

/**
 * 是否工时填报
 * @type {string}
 */
const IS_MAN_HOUR_REPORTING = 'isManHourReporting'
export function setIsManHourReporting (val) {
  set(IS_MAN_HOUR_REPORTING, val)
}
export function getIsManHourReporting () {
  return get(IS_MAN_HOUR_REPORTING)
}
export function clearIsManHourReporting () {
  clear(IS_MAN_HOUR_REPORTING)
}

/**
 * 是否选择项目
 * @type {string}
 */
const IS_SELECT_PROJECT = 'isSelectProject'
export function setIsSelectProject (val) {
  set(IS_SELECT_PROJECT, val)
}
export function getIsSelectProject () {
  return get(IS_SELECT_PROJECT)
}
export function clearIsSelectProject () {
  clear(IS_SELECT_PROJECT)
}

/**
 * 是否选择服务类别
 * @type {string}
 */
const IS_SERVICE_TYPE = 'isServiceType'
export function setIsServiceType (val) {
  set(IS_SERVICE_TYPE, val)
}
export function getIsServiceType () {
  return get(IS_SERVICE_TYPE)
}
export function clearIsServiceType () {
  clear(IS_SERVICE_TYPE)
}

/**
 * 是否工时填报
 * @type {string}
 */
const CHOOSE_TIME = 'chooseTime'
export function setChooseTime (val) {
  set(CHOOSE_TIME, JSON.stringify(val))
}
export function getChooseTime () {
  var result = get(CHOOSE_TIME)
  if (result != -1) {
    return JSON.parse(result)
  } else {
    return result
  }
}
export function clearChooseTime () {
  clear(CHOOSE_TIME)
}

function set (key, val) {
  window.localStorage.setItem(key, val)
}

function get (key) {
  return window.localStorage.getItem(key) || -1
}

function clear (key) {
  window.localStorage.setItem(key, -1)
}

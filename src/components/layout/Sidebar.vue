<template>
  <div>
    <h1>Sdiebar</h1>
    <b-list-group>
      <b-list-group-item href="#" @click="$router.push('/dashboard')">대시보드</b-list-group-item>
      <b-list-group-item href="#" @click="$router.push('/department')">부서관리</b-list-group-item>
      <b-list-group-item href="#" @click="$router.push('/user')">사용자 관리</b-list-group-item>
      <b-list-group-item href="#" @click="$router.push('/device')">장비 관리</b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {}
</script>

<style></style>

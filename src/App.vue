<template>
   <header>
      <div class="text_block">
        <div class="wrapper">
          <i class="fa-solid fa-phone"></i>
          <span class="contact_phone">050 080 50 49</span>
        </div>
      </div>
      <div class="logo_block">
        <div class="wrapper">
          <router-link to="/" class="logo_link">
            <span class="logo_text">PAYBOX</span>
          </router-link>
        </div>
      </div>
    </header>
    <router-view></router-view>
</template>

<script>
export default {
  name:"App",
}

</script>


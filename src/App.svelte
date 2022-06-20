<script>
  import Component1 from './lib/Component1.svelte';
  import Component2 from './lib/Component2.svelte';

  let component = Component1;
</script>

<main>
  <section class="container">
    <h1>Svelte</h1>

    <svelte:component this="{component}" />

    <br />
    <button
      style="margin-top: 5rem;"
      on:click="{(e) =>
        (component = component === Component1 ? Component2 : Component1)}"
      >change content!</button
    >
  </section>
</main>

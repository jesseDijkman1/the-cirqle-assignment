<template>
  <div class="flex flex-col space-y-4 items-center relative">
    <span
      v-if="verified"
      class="absolute top-4 right-4 [&>svg]:w-6 [&>svg]:h-auto text-green-400 b"
    >
      <IconVerified />
      <UITooltip>Verified</UITooltip>
    </span>

    <UIImage :src="data?.data?.creator?.profilePictureUrl" />

    <div class="flex flex-col w-full">
      <UIHeading tag="h2" :loading="data === null">{{ fullName }} </UIHeading>

      <ul class="flex flex-col justify-evenly w-full space-y-3">
        <li>
          <span
            target="_blank"
            class="button relative flex items-center space-x-2 [&>svg]:w-5 [&>svg]:h-auto"
          >
            <IconWorld />

            <span>{{ country }}</span>
          </span>
        </li>
        <li>
          <span
            target="_blank"
            class="button relative flex items-center space-x-2 [&>svg]:w-5 [&>svg]:h-auto"
          >
            <IconLocation />

            <span>{{ city }}</span>
          </span>
        </li>
        <li>
          <a
            :href="`https://www.instagram.com/${instagramHandle}`"
            target="_blank"
            class="button relative flex items-center space-x-2 [&>svg]:w-5 [&>svg]:h-auto"
            id="post-profile-instagram-link"
          >
            <IconInstagram />

            <span>{{ instagramHandle }}</span>
          </a>
        </li>

        <li>
          <a
            :href="`https://www.facebook.com/${facebookHandle}`"
            target="_blank"
            class="button relative flex items-center space-x-2 [&>svg]:w-5 [&>svg]:h-auto"
          >
            <IconFacebook />
            <span>{{ facebookHandle }}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        data: null,
      };
    },
    computed: {
      fullName() {
        return this.data
          ? `${this.data.data.creator.firstName} ${this.data.data.creator.lastName}`.toLowerCase()
          : null;
      },
      instagramHandle() {
        if (this.data === null) return null;

        const instagramChannel = this.data.data.creator.socialChannels.find(
          (sc) => sc.channelName === "instagram"
        );

        if (instagramChannel) return instagramChannel.handle;
      },
      facebookHandle() {
        if (this.data === null) return null;

        // Todo add validation (facebookPage handle migth not always exist)
        const instagramChannel = this.data.data.creator.socialChannels.find(
          (sc) => sc.channelName === "instagram"
        );

        if (instagramChannel && instagramChannel.facebookPage)
          return instagramChannel.facebookPage.handle;
      },
      city() {
        if (this.data === null) return null;

        return this.data.data.creator.city;
      },
      country() {
        if (this.data === null) return null;

        return this.data.data.creator.country;
      },
      verified() {
        if (this.data === null) return null;

        return this.data.data.creator.verified;
      },
    },
    mounted() {
      this.fetchProile();
    },
    methods: {
      async fetchProile() {
        try {
          const response = await fetch("/creator.json");
          this.data = await response.json();
        } catch (err) {
          console.error(err);
          this.data = {};
        }
      },
    },
  };
</script>

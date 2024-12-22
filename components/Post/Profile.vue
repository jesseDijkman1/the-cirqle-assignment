<template>
  <div v-if="data" class="flex flex-col space-y-4 items-center relative">
    <span
      v-if="verified"
      class="absolute top-4 right-4 [&>svg]:w-6 [&>svg]:h-auto text-green-400"
    >
      <IconVerified />
    </span>

    <UIImage :src="profilePictureUrl" />

    <div class="flex flex-col w-full">
      <UIHeading tag="h2">{{ fullName }} </UIHeading>

      <ul class="flex flex-col justify-evenly w-full space-y-3">
        <li v-if="country">
          <span
            target="_blank"
            class="button relative flex items-center space-x-2 [&>svg]:w-5 [&>svg]:h-auto"
          >
            <IconWorld />
            <span>{{ country }}</span>
          </span>
        </li>
        <li v-if="city">
          <span
            target="_blank"
            class="button relative flex items-center space-x-2 [&>svg]:w-5 [&>svg]:h-auto"
          >
            <IconLocation />
            <span>{{ city }}</span>
          </span>
        </li>
        <li v-if="instagramHandle">
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
        <li v-if="facebookHandle">
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
    props: {
      data: {
        type: Object,
        required: true,
      },
    },
    computed: {
      creatorData() {
        if (!this.data || !this.data.creator) return null;
        return this.data.creator;
      },
      profilePictureUrl() {
        return this.creatorData?.profilePictureUrl || ""; // Fallback to empty string if URL doesn't exist
      },
      fullName() {
        const creator = this.creatorData;
        return creator
          ? `${creator.firstName} ${creator.lastName}`.toLowerCase()
          : "";
      },
      instagramHandle() {
        const socialChannel = this.getChannel("instagram");
        return socialChannel?.handle;
      },
      facebookHandle() {
        const socialChannel = this.getChannel("instagram");
        return socialChannel?.facebookPage?.handle;
      },
      city() {
        return this.creatorData?.city || "";
      },
      country() {
        return this.creatorData?.country || "";
      },
      verified() {
        return this.creatorData?.verified || false;
      },
    },
    methods: {
      getChannel(channelName) {
        return this.creatorData?.socialChannels?.find(
          (sc) => sc.channelName === channelName
        );
      },
    },
  };
</script>

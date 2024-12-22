<template>
  <div class="flex flex-col space-y-4 items-center relative">
    <span
      class="absolute top-4 right-4 [&>svg]:w-6 [&>svg]:h-auto text-green-400"
    >
      <IconVerified :isLoading />
    </span>

    <UIImage :isLoading :src="profilePictureUrl" />

    <div class="flex flex-col w-full">
      <UIHeading :isLoading tag="h2">{{ fullName }} </UIHeading>

      <ul class="flex flex-col justify-evenly w-full space-y-3">
        <li>
          <span
            target="_blank"
            class="button relative flex items-center space-x-2 [&>svg]:w-5 [&>svg]:h-auto"
          >
            <IconWorld :isLoading />
            <span
              :class="[
                { 'bg-skeleton-loader w-full h-4 rounded block': isLoading },
              ]"
              >{{ country }}</span
            >
          </span>
        </li>
        <li>
          <span
            target="_blank"
            class="button relative flex items-center space-x-2 [&>svg]:w-5 [&>svg]:h-auto"
          >
            <IconLocation :isLoading />
            <span
              :class="[
                { 'bg-skeleton-loader w-full h-4 rounded block': isLoading },
              ]"
              >{{ city }}</span
            >
          </span>
        </li>
        <li>
          <a
            :href="`https://www.instagram.com/${instagramHandle}`"
            target="_blank"
            class="button relative flex items-center space-x-2 [&>svg]:w-5 [&>svg]:h-auto"
            id="post-profile-instagram-link"
          >
            <IconInstagram :isLoading />
            <span
              :class="[
                { 'bg-skeleton-loader w-full h-4 rounded block': isLoading },
              ]"
              >{{ instagramHandle }}</span
            >
          </a>
        </li>
        <li>
          <a
            :href="`https://www.facebook.com/${facebookHandle}`"
            target="_blank"
            class="button relative flex items-center space-x-2 [&>svg]:w-5 [&>svg]:h-auto"
          >
            <IconFacebook :isLoading />
            <span
              :class="[
                { 'bg-skeleton-loader w-full h-4 rounded block': isLoading },
              ]"
              >{{ facebookHandle }}</span
            >
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
      isLoading() {
        return this.data === null;
      },
      creatorData() {
        if (!this.data || !this.data.creator) return null;
        return this.data.creator;
      },
      profilePictureUrl() {
        return this.creatorData?.profilePictureUrl || null; // Fallback to empty string if URL doesn't exist
      },
      fullName() {
        const creator = this.creatorData;
        return creator
          ? `${creator.firstName} ${creator.lastName}`.toLowerCase()
          : null;
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
        return this.creatorData?.city || null;
      },
      country() {
        return this.creatorData?.country || null;
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

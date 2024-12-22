<template>
  <div class="flex flex-col space-y-4 items-center relative">
    <span
      class="absolute top-4 right-4 [&>svg]:w-6 [&>svg]:h-auto text-green-400"
    >
      <IconVerified :is-loading />
    </span>

    <UIImage :is-loading :src="profilePictureUrl" />

    <div class="flex flex-col w-full">
      <UIHeading :is-loading tag="h2">{{ fullName }}, {{ age }} </UIHeading>

      <ul class="flex flex-col justify-evenly w-full space-y-3">
        <li>
          <UIBlock
            class="button relative flex items-center space-x-2 [&>svg]:w-5 [&>svg]:h-auto"
          >
            <IconWorld :is-loading />
            <span
              :class="[
                { 'bg-skeleton-loader w-full h-4 rounded block': isLoading },
              ]"
              >{{ country }}</span
            >
          </UIBlock>
        </li>
        <li>
          <UIBlock
            class="button relative flex items-center space-x-2 [&>svg]:w-5 [&>svg]:h-auto"
          >
            <IconLocation :is-loading />
            <span
              :class="[
                { 'bg-skeleton-loader w-full h-4 rounded block': isLoading },
              ]"
              >{{ city }}</span
            >
          </UIBlock>
        </li>
        <li>
          <a
            :href="`https://www.instagram.com/${instagramHandle}`"
            target="_blank"
          >
            <UIBlock
              class="button relative flex items-center space-x-2 [&>svg]:w-5 [&>svg]:h-auto"
            >
              <IconInstagram :is-loading />
              <span
                :class="[
                  { 'bg-skeleton-loader w-full h-4 rounded block': isLoading },
                ]"
                >{{ instagramHandle }}</span
              >
            </UIBlock>
          </a>
        </li>
        <li>
          <a
            :href="`https://www.facebook.com/${facebookHandle}`"
            target="_blank"
          >
            <UIBlock
              class="button relative flex items-center space-x-2 [&>svg]:w-5 [&>svg]:h-auto"
            >
              <IconFacebook :is-loading />
              <span
                :class="[
                  { 'bg-skeleton-loader w-full h-4 rounded block': isLoading },
                ]"
                >{{ facebookHandle }}</span
              >
            </UIBlock>
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
        return this.creatorData?.profilePictureUrl || null;
      },
      age() {
        const now = new Date();
        const birthDate = new Date(this.creatorData.dateOfBirth);

        let age = now.getUTCFullYear() - birthDate.getUTCFullYear();

        if (
          now.getMonth() > birthDate.getMonth() ||
          (now.getMonth() === birthDate.getMonth() &&
            now.getDate() > birthDate.getDate())
        ) {
          age++;
        }

        return age;
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

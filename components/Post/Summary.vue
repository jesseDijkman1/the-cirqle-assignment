<template>
  <div>
    <UIHeading :is-loading tag="h2">Metrics</UIHeading>
    <div>
      <div class="grid gap-4 grid-cols-2 sm:grid-cols-3 xl:grid-cols-4">
        <UIMetric
          :is-loading
          label="RoAS"
          :organic="summaryData?.roi"
          :paid="summaryData?.adRoi"
          :total="summaryData?.totalRoi"
          :thresholds="[0, 2, 5]"
          graph-value-key="totalRoi"
          :graph-data="trendingData"
        />
        <UIMetric
          :is-loading
          label="Impressions"
          :organic="summaryData?.impressions"
          :paid="summaryData?.adImpressions"
          :total="summaryData?.totalImpressions"
          :thresholds="[0, 5000, 15000]"
          graph-value-key="totalImpressions"
          :graph-data="trendingData"
        />
        <UIMetric
          :is-loading
          label="Clicks"
          :organic="summaryData?.clicks"
          :paid="summaryData?.adClicks"
          :total="summaryData?.totalClicks"
          :thresholds="[50, 350, 500]"
          graph-value-key="totalClicks"
          :graph-data="trendingData"
        />
        <UIMetric
          :is-loading
          label="Revenue"
          :organic="summaryData?.revenue"
          :paid="summaryData?.adRevenue"
          :total="summaryData?.totalRevenue"
          :thresholds="[200, 1200, 2500]"
          graph-value-key="totalRevenue"
          :graph-data="trendingData"
        />
        <UIMetric
          :is-loading
          label="Ad Spend"
          :organic="summaryData?.spend"
          :paid="summaryData?.adSpend"
          :total="summaryData?.totalSpend"
          :thresholds="[0, 800, 1200]"
          graph-value-key="totalSpend"
          :graph-data="trendingData"
        />
      </div>

      <UIAccordion
        :is-loading
        label="See more information"
        open-label="See more"
        close-label="See less"
      >
        <UITable :data="tableData" />
      </UIAccordion>
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
      summaryData() {
        if (!this.data || !this.data.summary) return null;

        return this.data.summary;
      },
      trendingData() {
        if (!this.data || !this.data.trending) return null;
        return this.data.trending;
      },
      tableData() {
        if (!this.summaryData) return [];

        return [
          ["Metric", "Organic Value", "Paid Value", "Total Value"],
          [
            "Impressions",
            this.summaryData.impressions,
            this.summaryData.adImpressions,
            this.summaryData.totalImpressions,
          ],
          [
            "Clicks",
            this.summaryData.clicks,
            this.summaryData.adClicks,
            this.summaryData.totalClicks,
          ],
          [
            "Revenue",
            this.summaryData.revenue,
            this.summaryData.adRevenue,
            this.summaryData.totalRevenue,
          ],
          [
            "Ad Spend",
            this.summaryData.spend,
            this.summaryData.adSpend,
            this.summaryData.totalSpend,
          ],
          [
            "RoAS",
            this.summaryData.roi,
            this.summaryData.adRoi,
            this.summaryData.totalRoi,
          ],
        ];
      },
    },
  };
</script>

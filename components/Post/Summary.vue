<template>
  <div v-if="data">
    <UIHeading tag="h2">Metrics</UIHeading>
    <div>
      <div class="grid gap-4 grid-cols-2 sm:grid-cols-3 xl:grid-cols-4">
        <UIMetric
          label="RoAS"
          :organic="summaryData.roi"
          :paid="summaryData.adRoi"
          :total="summaryData.totalRoi"
          :thresholds="[0, 6, 9]"
          graphValueKey="totalRoi"
          :graphData="trendingData"
        />
        <UIMetric
          label="Impressions"
          :organic="summaryData.impressions"
          :paid="summaryData.adImpressions"
          :total="summaryData.totalImpressions"
          graphValueKey="totalImpressions"
          :graphData="trendingData"
        />
        <UIMetric
          label="Clicks"
          :organic="summaryData.clicks"
          :paid="summaryData.adClicks"
          :total="summaryData.totalClicks"
          graphValueKey="totalClicks"
          :graphData="trendingData"
        />
        <UIMetric
          label="Revenue"
          :organic="summaryData.revenue"
          :paid="summaryData.adRevenue"
          :total="summaryData.totalRevenue"
          graphValueKey="totalRevenue"
          :graphData="trendingData"
        />
        <UIMetric
          label="Ad Spend"
          :organic="summaryData.spend"
          :paid="summaryData.adSpend"
          :total="summaryData.totalSpend"
          graphValueKey="totalSpend"
          :graphData="trendingData"
        />
      </div>

      <UIAccordion
        label="See more information"
        openLabel="See more"
        closeLabel="See less"
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

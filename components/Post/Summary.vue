<template>
  <div>
    <UIHeading tag="h2">Metrics</UIHeading>
    <div>
      <div class="grid gap-4 grid-cols-2 sm:grid-cols-3 xl:grid-cols-4">
        <UIMetric
          label="RoAS"
          :organic="data.roi"
          :paid="data.adRoi"
          :total="data.totalRoi"
          :thresholds="[0, 6, 9]"
          graphValueKey="totalRoi"
          :graphData="trending"
        />
        <UIMetric
          label="Impressions"
          :organic="data.impressions"
          :paid="data.adImpressions"
          :total="data.totalImpressions"
          graphValueKey="totalImpressions"
          :graphData="trending"
        />
        <UIMetric
          label="Clicks"
          :organic="data.clicks"
          :paid="data.adClicks"
          :total="data.totalClicks"
          graphValueKey="totalClicks"
          :graphData="trending"
        />
        <UIMetric
          label="Revenue"
          :organic="data.revenue"
          :paid="data.adRevenue"
          :total="data.totalRevenue"
          graphValueKey="totalRevenue"
          :graphData="trending"
        />
        <UIMetric
          label="Ad Spend"
          :organic="data.spend"
          :paid="data.adSpend"
          :total="data.totalSpend"
          graphValueKey="totalSpend"
          :graphData="trending"
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
      tableData() {
        if (!this.data) return [];

        return [
          ["Metric", "Organic Value", "Paid Value", "Total Value"],
          [
            "Impressions",
            this.data.impressions,
            this.data.adImpressions,
            this.data.totalImpressions,
          ],
          [
            "Clicks",
            this.data.clicks,
            this.data.adClicks,
            this.data.totalClicks,
          ],
          [
            "Revenue",
            this.data.revenue,
            this.data.adRevenue,
            this.data.totalRevenue,
          ],
          [
            "Ad Spend",
            this.data.spend,
            this.data.adSpend,
            this.data.totalSpend,
          ],
          ["RoAS", this.data.roi, this.data.adRoi, this.data.totalRoi],
        ];
      },
    },
  };
</script>

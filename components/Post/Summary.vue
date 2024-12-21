<template>
  <div class="">
    <UIHeading tag="h2">Metrics</UIHeading>
    <div v-if="data">
      <div class="grid gap-4 grid-cols-2 sm:grid-cols-3 xl:grid-cols-4">
        <UIMetric
          label="RoAS"
          :organic="data.roi"
          :paid="data.adRoi"
          :total="data.totalRoi"
          :thresholds="[0, 6, 9]"
        />
        <UIMetric
          label="Impressions"
          :organic="data.impressions"
          :paid="data.adImpressions"
          :total="data.totalImpressions"
        />
        <UIMetric
          label="Clicks"
          :organic="data.clicks"
          :paid="data.adClicks"
          :total="data.totalClicks"
        />
        <UIMetric
          label="Revenue"
          :organic="data.revenue"
          :paid="data.adRevenue"
          :total="data.totalRevenue"
        />
        <UIMetric
          label="Ad Spend"
          :organic="data.spend"
          :paid="data.adSpend"
          :total="data.totalSpend"
        />
      </div>

      <UIAccordion
        label="See more information"
        openLabel="See more"
        closeLabel="See less"
      >
        <UITable :data="tableData" />

        <!-- <table>
        <thead>
          <tr>
            <th>Metric</th>
            <th>Organice value</th>
            <th>Paid value</th>
            <th>Total Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Impressions</td>
            <td>{{ data.impressions }}</td>
            <td>{{ data.adImpressions }}</td>
            <td>{{ data.totalImpressions }}</td>
          </tr>
          <tr>
            <td>Clicks</td>
            <td>{{ data.clicks }}</td>
            <td>{{ data.adClicks }}</td>
            <td>{{ data.totalClicks }}</td>
          </tr>
          <tr>
            <td>Revenue</td>
            <td>{{ data.revenue }}</td>
            <td>{{ data.adRevenue }}</td>
            <td>{{ data.totalRevenue }}</td>
          </tr>
          <tr>
            <td>Ad Spend</td>
            <td>{{ data.spend }}</td>
            <td>{{ data.adSpend }}</td>
            <td>{{ data.totalSpend }}</td>
          </tr>
          <tr>
            <td>RoAS</td>
            <td>Unknown</td>
            <td>{{ data.adRoi }}</td>
            <td>{{ data.totalRoi }}</td>
          </tr>
        </tbody>
      </table> -->
      </UIAccordion>
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
    mounted() {
      this.fetchProile();
    },
    computed: {
      tableData() {
        return [
          ["Metric", "Organice value", "Paid value", "Total Value"],
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
            "Ad spend",
            this.data.spend,
            this.data.adSpend,
            this.data.totalSpend,
          ],
          ["RoAS", this.data.roi, this.data.adRoi, this.data.totalRoi],
        ];
      },
    },
    methods: {
      async fetchProile() {
        try {
          const response = await fetch("/summary.json");
          this.data = await response.json();
        } catch (err) {
          console.error(err);
          this.data = {};
        }
      },
    },
  };
</script>

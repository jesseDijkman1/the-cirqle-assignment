<template>
  <div v-if="data">
    <table>
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
    </table>
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

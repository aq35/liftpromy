<template>
    <div class="chart-container">
        <canvas id="skillsRadarChart"></canvas>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Chart, registerables } from 'chart.js';

// Chart.jsの全てのコンポーネントを登録
Chart.register(...registerables);

const props = defineProps({
    skillArea: {
        type: Object,
        required: true
    }
});

const skillsRadarChart = ref(null);

onMounted(() => {
    const ctx = document.getElementById('skillsRadarChart').getContext('2d');

    skillsRadarChart.value = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: props.skillArea.labels,
            datasets: [{
                label: props.skillArea.name,
                data: [
                    props.skillArea.param1,
                    props.skillArea.param2,
                    props.skillArea.param3,
                    props.skillArea.param4,
                    props.skillArea.param5,
                ],
                backgroundColor: 'rgba(54, 162, 235, 0.2)', // データセットの背景色
                borderColor: 'rgba(54, 162, 235, 1)', // データセットの枠線色
                borderWidth: 1 // データセットの枠線の幅
            }]
        },
        options: {
            plugins: {
                legend: {
                    // https://www.chartjs.org/docs/latest/configuration/legend.html
                    display: false // タイトル（凡例）を非表示にする
                }
            },
            scales: {
                r: {
                    angleLines: {
                        display: false // 放射軸の角度の線を非表示にする
                    },
                    suggestedMin: 0, // スケールの最小値を設定
                    suggestedMax: 100, // スケールの最大値を設定
                    ticks: {
                        // 評価項目のラベル設定
                        callback: (value) => {
                            switch (value) {
                                case 100:
                                    return '';
                                case 75:
                                    return 'B';
                                case 50:
                                    return 'C';
                                case 25:
                                    return 'D';
                                case 0:
                                    return 'E';
                                default:
                                    return '';
                            }
                        },
                        backdropColor: 'rgba(255, 255, 255, 0.5)', // ラベル背景色
                        showLabelBackdrop: true, // ラベルの背景表示
                        font: {
                            size: 10 // ラベルフォントサイズ
                        }
                    },
                    grid: {
                        color: 'rgba(200, 200, 200, 0.4)' // グリッド線の色
                    },
                    pointLabels: {
                        font: {
                            size: 10 // 各評価項目ラベルのフォントサイズ
                        },
                        color: '#000000', // 各評価項目ラベルの色
                        callback: (label) => {
                            // ラベルが長すぎる場合は改行する
                            if (label.length > 10) {
                                return label.split(' ').join('\n');
                            }
                            return label;
                        }
                    }
                }
            },
            responsive: true, // レスポンシブ表示を有効にする
            maintainAspectRatio: false // アスペクト比を維持しない
        },
        // plugins: [iconPlugin]
    });
});
</script>

<style scoped>
.chart-container {
    position: relative;
    width: 100%;
    height: 100%;
}

canvas {
    max-width: 300px;
    /* キャンバスの最大幅 */
    max-height: 300px;
    /* キャンバスの最大高さ */
}
</style>
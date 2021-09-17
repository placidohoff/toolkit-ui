import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg width="2657" viewBox="0 0 2657 1290" {...props}>
      <path d="M1283 1145.5C1283 1154.1 1281.2 1162.2 1277.6 1169.8C1274 1177.2 1268.1 1183.7 1259.9 1189.3C1251.9 1194.7 1241.4 1199 1228.4 1202.2C1215.6 1205.4 1199.8 1207 1181 1207C1170.4 1207 1160 1206.2 1149.8 1204.6C1139.8 1203 1130.2 1200.7 1121 1197.7C1112 1194.7 1103.6 1191.1 1095.8 1186.9C1088.2 1182.5 1081.6 1177.7 1076 1172.5L1091 1154.5C1102.4 1164.3 1115.7 1171.8 1130.9 1177C1146.1 1182 1162.8 1184.5 1181 1184.5C1201.2 1184.5 1215.5 1181.7 1223.9 1176.1C1232.3 1170.5 1236.5 1162.8 1236.5 1153C1236.5 1145.4 1233.2 1139 1226.6 1133.8C1220 1128.6 1208.8 1123.5 1193 1118.5L1136 1100.5C1117.2 1094.5 1103 1086.9 1093.4 1077.7C1083.8 1068.3 1079 1056.4 1079 1042C1079 1034.6 1080.7 1027.5 1084.1 1020.7C1087.7 1013.7 1093.2 1007.6 1100.6 1002.4C1108 997 1117.4 992.8 1128.8 989.8C1140.4 986.6 1154.3 985 1170.5 985C1180.3 985 1190 985.8 1199.6 987.4C1209.4 989 1218.7 991.3 1227.5 994.3C1236.5 997.3 1244.8 1001 1252.4 1005.4C1260.2 1009.6 1266.9 1014.3 1272.5 1019.5L1257.5 1037.5C1246.1 1027.7 1233.3 1020.3 1219.1 1015.3C1204.9 1010.1 1188.7 1007.5 1170.5 1007.5C1155.5 1007.5 1144.2 1010.1 1136.6 1015.3C1129.2 1020.5 1125.5 1026.9 1125.5 1034.5C1125.5 1038.7 1126.2 1042.4 1127.6 1045.6C1129 1048.6 1131.3 1051.5 1134.5 1054.3C1137.9 1056.9 1142.3 1059.4 1147.7 1061.8C1153.1 1064 1159.8 1066.4 1167.8 1069L1224.5 1087C1242.7 1092.8 1257 1100.4 1267.4 1109.8C1277.8 1119.2 1283 1131.1 1283 1145.5ZM1487.14 1006L1533.94 1172.5H1536.94L1587.64 991H1631.14L1572.64 1201H1508.14L1463.14 1040.5H1460.14L1415.14 1201H1350.64L1292.14 991H1335.64L1386.34 1172.5H1389.34L1436.14 1006H1487.14ZM1695.75 1127.5H1788.75L1743.75 1016.5H1740.75L1695.75 1127.5ZM1776.75 991L1862.25 1201H1819.05L1799.25 1150H1685.25L1665.45 1201H1622.25L1707.75 991H1776.75ZM1994.34 991C2009.34 991 2022.74 992.7 2034.54 996.1C2046.54 999.3 2056.64 1004.1 2064.84 1010.5C2073.04 1016.7 2079.34 1024.4 2083.74 1033.6C2088.14 1042.6 2090.34 1052.9 2090.34 1064.5C2090.34 1076.1 2088.14 1086.5 2083.74 1095.7C2079.34 1104.7 2073.04 1112.4 2064.84 1118.8C2056.64 1125 2046.54 1129.8 2034.54 1133.2C2022.74 1136.4 2009.34 1138 1994.34 1138H1929.84V1201H1886.34V991H1994.34ZM1929.84 1013.5V1115.5H1994.34C2010.14 1115.5 2022.34 1111.4 2030.94 1103.2C2039.74 1094.8 2044.14 1081.9 2044.14 1064.5C2044.14 1047.1 2039.74 1034.3 2030.94 1026.1C2022.34 1017.7 2010.14 1013.5 1994.34 1013.5H1929.84Z" fill="white"/>
<path d="M163.5 1031H166.5L244.5 851H309V1061H265.5V893H262.5L190.5 1061H139.5L67.5 893H64.5V1061H21V851H85.5L163.5 1031ZM458.883 1046C468.683 1046 477.483 1044.7 485.283 1042.1C493.283 1039.3 500.083 1035.1 505.683 1029.5C511.283 1023.7 515.583 1016.4 518.583 1007.6C521.783 998.6 523.383 987.9 523.383 975.5V851H566.883V975.5C566.883 1006.3 557.483 1029.3 538.683 1044.5C519.883 1059.5 493.283 1067 458.883 1067C424.283 1067 397.583 1059.5 378.783 1044.5C360.183 1029.3 350.883 1006.3 350.883 975.5V851H394.383V975.5C394.383 987.9 395.883 998.6 398.883 1007.6C402.083 1016.4 406.483 1023.7 412.083 1029.5C417.683 1035.1 424.383 1039.3 432.183 1042.1C440.183 1044.7 449.083 1046 458.883 1046ZM803.988 1005.5C803.988 1014.1 802.188 1022.2 798.588 1029.8C794.988 1037.2 789.088 1043.7 780.888 1049.3C772.888 1054.7 762.388 1059 749.388 1062.2C736.588 1065.4 720.788 1067 701.988 1067C691.388 1067 680.988 1066.2 670.788 1064.6C660.788 1063 651.188 1060.7 641.988 1057.7C632.988 1054.7 624.588 1051.1 616.788 1046.9C609.188 1042.5 602.588 1037.7 596.988 1032.5L611.988 1014.5C623.388 1024.3 636.688 1031.8 651.888 1037C667.088 1042 683.788 1044.5 701.988 1044.5C722.188 1044.5 736.488 1041.7 744.888 1036.1C753.288 1030.5 757.488 1022.8 757.488 1013C757.488 1005.4 754.188 999 747.588 993.8C740.988 988.6 729.788 983.5 713.988 978.5L656.988 960.5C638.188 954.5 623.988 946.9 614.388 937.7C604.788 928.3 599.988 916.4 599.988 902C599.988 894.6 601.688 887.5 605.088 880.7C608.688 873.7 614.188 867.6 621.588 862.4C628.988 857 638.388 852.8 649.788 849.8C661.388 846.6 675.288 845 691.488 845C701.288 845 710.988 845.8 720.588 847.4C730.388 849 739.688 851.3 748.488 854.3C757.488 857.3 765.788 861 773.388 865.4C781.188 869.6 787.888 874.3 793.488 879.5L778.488 897.5C767.088 887.7 754.288 880.3 740.088 875.3C725.888 870.1 709.688 867.5 691.488 867.5C676.488 867.5 665.188 870.1 657.588 875.3C650.188 880.5 646.488 886.9 646.488 894.5C646.488 898.7 647.188 902.4 648.588 905.6C649.988 908.6 652.288 911.5 655.488 914.3C658.888 916.9 663.288 919.4 668.688 921.8C674.088 924 680.788 926.4 688.788 929L745.488 947C763.688 952.8 777.988 960.4 788.388 969.8C798.788 979.2 803.988 991.1 803.988 1005.5ZM877.488 1061H833.988V851H877.488V1061Z" fill="white"/>
<ellipse cx="830.884" cy="1221.06" rx="83.8839" ry="59.9426" fill="white"/>
<path d="M984.36 827.277L1019.57 811.619L916.394 1217.54L875.4 1239.03L984.36 827.277Z" fill="white"/>
<ellipse cx="1141.51" cy="838.943" rx="83.8839" ry="59.9426" transform="rotate(-180 1141.51 838.943)" fill="white"/>
<path d="M988.034 1232.73L952.822 1248.38L1056 842.459L1096.99 820.977L988.034 1232.73Z" fill="white"/>
<path d="M2608 239C2608 418.769 2743.27 651.904 2563.5 651.904C2383.73 651.904 2238 506.173 2238 326.404C2238 146.636 2383.73 0.904297 2563.5 0.904297C2743.27 0.904297 2608 59.2313 2608 239Z" fill="url(#paint0_linear)"/>
<defs>
<linearGradient id="paint0_linear" x1="2401.51" y1="-48.3122" x2="2575.16" y2="-25.3031" gradientUnits="userSpaceOnUse">
<stop stop-color="#00CC9B"/>
<stop offset="1" stop-color="#018D6C"/>
</linearGradient>
</defs>
    </Svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
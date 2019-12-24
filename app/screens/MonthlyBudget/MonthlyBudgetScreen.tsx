import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import Slider from "react-native-slider";

import { Text } from "../../components";
import colors from "../../style/colors";
import styles from "./MonthlyBudgetScreen.styles";
import navigationOptions from "./MonthlyBudgetScreen.navigationOptions";
import { t } from "../../utils/translations";

const DEFAULT_MONTHLY_CARBON_BUDGET = 500;
const MIN_MONTHLY_CARBON_BUDGET = 0;
const MAX_MONTHLY_CARBON_BUDGET = 1000;

const MonthlyBudgetScreen = () => {
  const [value, setValue] = useState(DEFAULT_MONTHLY_CARBON_BUDGET);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.textContainer}>
        <Text.Primary bold>
          {t("MONTHLY_BUDGET_MY_MONTHLY_CARBON_BUDGET")}
        </Text.Primary>
        <Text.Primary lightGray>{Math.round(value) + " kg"}</Text.Primary>
      </View>
      <Slider
        minimumTrackTintColor={colors.linkGreen}
        trackStyle={styles.track}
        thumbStyle={styles.thumb}
        style={styles.slider}
        maximumValue={MAX_MONTHLY_CARBON_BUDGET}
        minimumValue={MIN_MONTHLY_CARBON_BUDGET}
        value={value}
        onValueChange={setValue}
      />
    </ScrollView>
  );
};

MonthlyBudgetScreen.navigationOptions = navigationOptions;

export default MonthlyBudgetScreen;
import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import ActScreen from "../screens/Act";
import BudgetScreen from "../screens/Budget";
import EmissionsScreen from "../screens/Emissions";
import SettingsScreen from "../screens/Settings";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

const ActStack = createStackNavigator(
  {
    Act: ActScreen
  },
  config
);

ActStack.navigationOptions = {
  tabBarLabel: "Act",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-information-circle"
      }
    />
  )
};

ActStack.path = "act";

const BudgetStack = createStackNavigator(
  {
    Budget: BudgetScreen
  },
  config
);

BudgetStack.navigationOptions = {
  tabBarLabel: "Budget",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-link" : "md-link"}
    />
  )
};

BudgetStack.path = "budget";

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: "Settings",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-options" : "md-options"}
    />
  )
};

SettingsStack.path = "settings";

const EmissionsStack = createStackNavigator(
  {
    Emissions: EmissionsScreen
  },
  config
);

EmissionsStack.navigationOptions = {
  tabBarLabel: "Emissions",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-options" : "md-options"}
    />
  )
};

EmissionsStack.path = "emissions";

const tabNavigator = createBottomTabNavigator({
  ActStack,
  BudgetStack,
  SettingsStack,
  EmissionsStack
});

tabNavigator.path = "";

export default tabNavigator;
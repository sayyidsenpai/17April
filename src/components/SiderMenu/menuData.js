export default [
  {
    title: "Dashboard",
    key: "dashboard",
    url: "/dashboard",
    icon: "dashboard"
  },
  {
    title: "Settings",
    key: "settings",
    disabled: true,
    icon: "setting",
    children: [
      {
        title: "Users",
        key: "users",
        disabled: true,
        children: [
          {
            title: "Menu Setup",
            key: "menu-setup",
            url: "/settings/menu-setup"
          },
          {
            title: "Role Setup",
            key: "role-setup",
            url: "/settings/role-setup"
          },
          {
            title: "user Setup",
            key: "user-setup",
            url: "/settings/user-setup"
          },
        ]
      },
      {
        title: "Role User",
        key: "role-user",
        url: "/settings/role-user"
      },
    ]
  },
  {
    title: "Report",
    key: "report",
    disabled: true,
    icon: "file-text",
    children: [
      {
        title: "Logs Activity User",
        key: "logs-activity-user",
        url: "/report/logs-activity-user"
      },
    ]
  }
];

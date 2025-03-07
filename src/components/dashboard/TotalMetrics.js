import React from "react";
import { Card, Metric, Text, Icon, Flex, Grid } from "@tremor/react";
import { ClockIcon, VideoCameraIcon, UsersIcon } from "@heroicons/react/solid";
import PropTypes from "prop-types";

TotalMetrics.propTypes = {
  data: PropTypes.shape({
    totalSessions: PropTypes.number,
    totalHours: PropTypes.number,
    totalPartners: PropTypes.number
  })
};

export function TotalMetrics({
  data: { totalSessions, totalHours, totalPartners }
}) {
  const metrics = [
    {
      title: "Total sessions",
      metric: totalSessions + (totalSessions > 1 ? " sessions" : " session"),
      icon: VideoCameraIcon
    },
    {
      title: "Total hours of sessions",
      metric:
        Math.round(totalHours) +
        (Math.round(totalHours) > 1 ? " hours" : " hour"),
      icon: ClockIcon
    },
    {
      title: "Total unique partners",
      metric: totalPartners + (totalPartners > 1 ? " partners" : " partner"),
      icon: UsersIcon
    }
  ];

  return (
    <>
      <Grid numColsSm={1} numColsLg={3} className="gap-3">
        {metrics.map((item) => (
          <Card key={item.title}>
            <Flex justifyContent="start" className="space-x-4">
              <Icon
                icon={item.icon}
                variant="light"
                size="xl"
                color={item.color}
              />
              <div className="truncate">
                <Text>{item.title}</Text>
                <Metric className="truncate">{item.metric}</Metric>
              </div>
            </Flex>
          </Card>
        ))}
      </Grid>
    </>
  );
}

import { select } from "d3-selection";
import { scaleBand, scaleLinear, scaleOrdinal } from "d3-scale";
import { axisLeft, axisBottom } from "d3-axis";
import { max } from "d3-array";
import { useEffect, useRef } from "react";

export interface DepartmentData {
  department: string;
  plan: number;
  fact: number;
}

interface GroupedBarChartProps {
  data: DepartmentData[];
  width?: number;
  height?: number;
}

export const GroupedBarChart = ({ data, width = 600, height = 400 }: GroupedBarChartProps) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!data.length || !svgRef.current) return;

    const svg = select(svgRef.current);
    svg.selectAll("*").remove(); // Очистка предыдущего рендера

    const margin = { top: 40, right: 20, bottom: 50, left: 60 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const x0 = scaleBand()
      .domain(data.map((d) => d.department))
      .range([0, innerWidth])
      .padding(0.2);

    const x1 = scaleBand()
      .domain(["plan", "fact"])
      .range([0, x0.bandwidth()])
      .padding(0.05);

    const y = scaleLinear()
      .domain([0, max(data, (d) => Math.max(d.plan, d.fact)) || 0])
      .nice()
      .range([innerHeight, 0]);

    const color = scaleOrdinal<string>()
      .domain(["plan", "fact"])
      .range(["#4e79a7", "#f28e2b"]);

    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    g.append("g").call(axisLeft(y));
    g.append("g")
      .attr("transform", `translate(0,${innerHeight})`)
      .call(axisBottom(x0));

    const departmentGroups = g
      .selectAll("g.department")
      .data(data)
      .enter()
      .append("g")
      .attr("class", "department")
      .attr("transform", (d) => `translate(${x0(d.department)},0)`);

    departmentGroups
      .selectAll("rect")
      .data((d) =>
        ["plan", "fact"].map((key) => ({
          key,
          value: d[key as keyof DepartmentData] as number,
        }))
      )
      .enter()
      .append("rect")
      .attr("x", (d) => x1(d.key)!)
      .attr("y", (d) => y(d.value))
      .attr("width", x1.bandwidth())
      .attr("height", (d) => innerHeight - y(d.value))
      .attr("fill", (d) => color(d.key)!);
  }, [data, width, height]);

  return <svg ref={svgRef} width={width} height={height} />;
};


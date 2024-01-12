import { Metadata } from "next";
import Image from "next/image";
import { cn } from "@palettify/utils";
import { Button } from "@/modules/shadcn-ui/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/modules/shadcn-ui/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/modules/shadcn-ui/ui/tabs";
import { CalendarDateRangePicker } from "./components/date-range-picker";
import { MainNav } from "./components/main-nav";
import { Overview } from "./components/overview";
import { RecentSales } from "./components/recent-sales";
import { Search } from "./components/search";
import TeamSwitcher from "./components/team-switcher";
import { UserNav } from "./components/user-nav";

export function Dashboard({ mobileView }: { mobileView?: boolean }) {
  return (
    <div className="light-mode flex flex-col">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <TeamSwitcher />
          <MainNav className={cn("mx-6 hidden xl:block", { "xl:hidden": mobileView })} />
          <div className="ml-auto flex items-center space-x-4">
            <Search className={cn("hidden xl:block", { "xl:hidden": mobileView })} />
            <UserNav />
          </div>
        </div>
      </div>
      <div className={cn("flex-1 space-y-4 p-8 pt-6", { "px-4": mobileView })}>
        <div className="flex items-end justify-between space-y-2">
          <h2
            className={cn("mr-2 text-3xl font-bold tracking-tight", {
              "text-2xl": mobileView,
            })}
          >
            Dashboard
          </h2>
          <div className="flex items-center space-x-2">
            <CalendarDateRangePicker
              className={cn("hidden xl:block", { "xl:hidden": mobileView })}
            />
            <Button>Download</Button>
            <Button
              variant="secondary"
              className={cn("hidden lg:block", { "lg:hidden": mobileView })}
            >
              Export
            </Button>
          </div>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics" disabled>
              Analytics
            </TabsTrigger>
            <TabsTrigger value="reports" disabled>
              Reports
            </TabsTrigger>
            <TabsTrigger value="notifications" disabled>
              Notifications
            </TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div
              className={cn("grid grid-cols-2 gap-4 xl:grid-cols-4", {
                "grid-cols-1 xl:grid-cols-1": mobileView,
              })}
            >
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="text-muted-foreground h-4 w-4"
                  >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$45,231</div>
                  <p className="text-muted-foreground text-xs">+20.1% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="text-muted-foreground h-4 w-4"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+2350</div>
                  <p className="text-muted-foreground text-xs">+180.1% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Sales</CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="text-muted-foreground h-4 w-4"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <path d="M2 10h20" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+12,234</div>
                  <p className="text-muted-foreground text-xs">+19% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Now</CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="text-muted-foreground h-4 w-4"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+573</div>
                  <p className="text-muted-foreground text-xs">+201 since last hour</p>
                </CardContent>
              </Card>
            </div>
            <div className="grid grid-cols-7 gap-4">
              <Card
                className={cn("col-span-7 xl:col-span-4", {
                  "xl:col-span-7": mobileView,
                })}
              >
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <Overview />
                </CardContent>
              </Card>
              <Card
                className={cn("col-span-7 xl:col-span-3", {
                  "xl:col-span-7": mobileView,
                })}
              >
                <CardHeader>
                  <CardTitle>Recent Sales</CardTitle>
                  <CardDescription>You made 265 sales this month.</CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentSales />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

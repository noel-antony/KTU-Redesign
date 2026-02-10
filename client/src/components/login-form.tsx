import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Lock, User, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

export function LoginForm() {
  const [loading, setLoading] = useState(false);
  const [, setLocation] = useLocation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log(values);
      setLoading(false);
      // For mockup purposes, show success or redirect
      alert("Login successful! Redirecting to dashboard...");
    }, 1500);
  }

  return (
    <Card className="w-full max-w-md mx-auto shadow-xl border-t-4 border-t-primary animate-in fade-in-50 zoom-in-95 duration-500">
      <CardHeader className="space-y-1 text-center pb-8">
        <CardTitle className="text-2xl font-serif text-primary">Sign In</CardTitle>
        <CardDescription className="text-muted-foreground">
          Enter your credentials to access the e-Governance portal
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        placeholder="Enter username" 
                        {...field} 
                        className="pl-9 bg-secondary/30 focus:bg-background transition-colors"
                        data-testid="input-username"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        type="password" 
                        placeholder="Enter password" 
                        {...field} 
                        className="pl-9 bg-secondary/30 focus:bg-background transition-colors"
                        data-testid="input-password"
                      />
                    </div>
                  </FormControl>
                  <div className="flex justify-end mt-1">
                    <Button variant="link" size="sm" className="px-0 font-normal h-auto text-muted-foreground hover:text-primary" type="button">
                      Forgot password?
                    </Button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full text-base py-5 font-medium shadow-md transition-all hover:translate-y-[1px]" disabled={loading} data-testid="button-login">
              {loading ? "Signing in..." : (
                <span className="flex items-center gap-2">
                  Login <ArrowRight className="h-4 w-4" />
                </span>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex flex-col gap-2 pt-2 pb-6 border-t bg-secondary/20">
        <p className="text-xs text-center text-muted-foreground px-4">
          By logging in, you agree to the University's Acceptable Use Policy and Terms of Service.
        </p>
      </CardFooter>
    </Card>
  );
}

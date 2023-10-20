/**
 * v0 by Vercel.
 * @see https://v0.dev/t/saN0ZKnCXnp
 */
import { Label } from "@/components/ui/label"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { CardTitle, CardDescription, Card } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="container mx-auto p-6 bg-gradient-to-r from-slate-900 via-cyan-600 to-pink-700 dark:bg-gray-950">
      <h1 className="text-4xl font-bold mb-4 text-center">Find Your Perfect Hosting Platform</h1>
      <p className="text-xl text-center mb-10 text-gray-50 dark:text-gray-300">
        Answer a few questions and we'll suggest the best hosting platform for you.
      </p>
      <form className="space-y-8">
        <div className="space-y-2 dark:text-white">
          <Label htmlFor="question1">What is your budget?</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select your budget" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="low">60,000 a year</SelectItem>
              <SelectItem value="medium">100,00 a year</SelectItem>
              <SelectItem value="high">150,000 a year</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2 dark:text-white">
          <Label htmlFor="question2">What is the main problem you are seeking to resolve?</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select the highest priority" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="beginner">Reduce Build and Deployment Times</SelectItem>
              <SelectItem value="intermediate">Increase Developer Velocity</SelectItem>
              <SelectItem value="expert">Reduce Infrastructure Maint</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2 dark:text-white">
          <Label htmlFor="question3">What is your industry type?</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select your Industry" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="blog">Ad Tech/MarTech</SelectItem>
              <SelectItem value="ecommerce">E-commerce</SelectItem>
              <SelectItem value="portfolio">Software/SaaS</SelectItem>
              <SelectItem value="business">Agency</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button className="w-full bg-blue-950 hover:bg-blue-50 text-white font-bold py-2 px-4 rounded" type="submit">
          Find My Hosting Platform
        </Button>
      </form>
      <div className="mt-10">
        <h2 className="text-3xl font-bold text-center">Recommended Hosting Platform</h2>
        <p className="text-xl text-center mt-2 text-gray-50 dark:text-gray-300">
          Based on your responses, we recommend:
        </p>
        <div className="flex justify-center items-center mt-10">
          <Card className="mx-auto max-w-md p-6">
            <img
              alt="Hosting Platform Logo"
              height="200"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Vercel_logo_black.svg/2560px-Vercel_logo_black.svg.png"
              style={{
                // aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="400"
            />
            <CardTitle className="text-2xl text-center my-4">Vercel Frontend Cloud</CardTitle>
            <CardDescription className="text-center mb-4">
              Vercel is the best option because you are looking to reduce your infra, future proof your tech stack, and you want to go composable.
            </CardDescription>
            <div className="text-center">
              <Button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                variant="default"
              >
                Visit Website
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <Link href="/">
          <Button variant="outline" className="mt-4 bg-transparent">
            Back to Home
          </Button>
        </Link>
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4 text-balance">Get in Touch</h1>
        <p className="text-muted-foreground text-lg text-balance">
          Add your profile to the list.
        </p>
        
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-card border border-border rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your name" className="bg-background" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="your.email@example.com" className="bg-background" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="How can we help?" className="bg-background" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Tell us more about your inquiry..."
                rows={6}
                className="bg-background resize-none"
              />
            </div>

            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <p className="text-muted-foreground mb-8">
              Reach out to get your profile added to the list
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-muted-foreground">remotedeveloperslist@gmail.com</p>
                {/* <p className="text-muted-foreground">support@remotedevs.com</p> */}
              </div>
            </div>

            {/* <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
                <p className="text-sm text-muted-foreground">Mon-Fri 9am-6pm EST</p>
              </div>
            </div> */}

            {/* <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Office</h3>
                <p className="text-muted-foreground">123 Remote Street</p>
                <p className="text-muted-foreground">San Francisco, CA 94102</p>
              </div>
            </div> */}
          </div>

          {/* <div className="bg-muted/50 border border-border rounded-lg p-6 mt-8">
            <h3 className="font-semibold mb-2">For Developers</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Interested in joining our platform? We'd love to have you on board.
            </p>
            <Button variant="outline" className="w-full bg-transparent">
              Apply as Developer
            </Button>
          </div> */}
        </div>
      </div>
    </div>
  )
}

# Seacra

# To Get Theme Access Credentials

Click on this Link:  https://docs.google.com/document/d/1muXDbmKyXT6RT9hfiQKff_Ak2gVAJHEcefcsByTaXwQ/edit

## Configure

[Anchor link to section titled &#34;Configure&#34;](https://shopify.dev/themes/tools/theme-kit/command-reference#configure)

Creates or updates configuration files.

Terminal

Copy

```bash
$ theme configure --password=[your-theme-kit-password]--store="[your-store.myshopify.com]"--themeid=[your-theme-id]
```

Running the `theme configure` command outputs a `config.yml` file in the current directory with the following contents:

Copy

```yml
1 development: [seacra]
2 password:    [your-theme-kit-password]
3 theme_id:    "[your-theme-id]"
4 store:       [your-store].myshopify.com
```


### Step 1: Windows

[Anchor link to section titled &#34;Windows&#34;](https://shopify.dev/themes/tools/theme-kit/getting-started#windows)

Install Theme Kit with [Chocolatey](https://chocolatey.org/) by running the following command:

Terminal

Copy

```bash
$ choco install themekit
```


## Step 2: Get a Theme Kit password

[Anchor link to section titled &#34;Step 2: Get a Theme Kit password&#34;](https://shopify.dev/themes/tools/theme-kit/getting-started#step-2-get-a-theme-kit-password)

After you install Theme Kit, you need to get a Theme Kit password to connect Theme Kit to your store and manage your template files. The store owner or a staff member with the appropriate permissions can create a Theme Kit password for you using the [Theme Kit Access app](https://shopify.dev/themes/tools/theme-kit/access).

### Steps:

[Anchor link to section titled &#34;Steps:&#34;](https://shopify.dev/themes/tools/theme-kit/getting-started#steps)

1. Ask the store owner or a staff member with the [appropriate permissions](https://shopify.dev/themes/tools/theme-kit/access#requirements) to create a Theme Kit password for you using the [Theme Kit Access app](https://apps.shopify.com/theme-kit-access).
2. Go to your email inbox and open the invitation containing your Theme Kit password.
3. In the invitation, click  **Get Theme Kit password** .
4. Copy the password. You’ll use it in the next step.

The link expires after 7 days or after you have viewed the password. You can only view the password once.


## Step 3: Connect to an existing theme

[Anchor link to section titled &#34;Step 3: Connect to an existing theme&#34;](https://shopify.dev/themes/tools/theme-kit/getting-started#step-3-connect-to-an-existing-theme)

#### Note

If you don't want to work on an existing theme, then you can [create a new theme](https://shopify.dev/themes/tools/theme-kit/getting-started#create-a-new-theme).

To connect to an existing theme, you'll need the theme's ID. The easiest way to get your theme's ID is to use the `theme get` command, which returns a list of themes and IDs that exist on the store.

The following is an example of the `theme get` command, where `your-password` is your Theme Kit password from [step 2](https://shopify.dev/themes/tools/theme-kit/getting-started#get-theme-kit-password) and `your-store` is your store's Shopify domain name:

Terminal

Copy

```bash
$ theme get --list--password=[your-password] --store="[your-store.myshopify.com]"
```


### Using PowerShell

[Anchor link to section titled &#34;Using PowerShell&#34;](https://shopify.dev/themes/tools/theme-kit/getting-started#using-powershell)

If you're using PowerShell, then you need to include quotations around the URL if it follows a single dash. This is especially important if you're using the short form in the command. For example, the following shows one example that will work, and one that won't:

Correct example

Copy

```sh
$ theme get --list -p=[password] -s="my-store.myshopify.com"
```

Incorrect example

Copy

```sh
$ theme get --list -p=[password] -s=my-store.myshopify.com
```


## Step 4: Set up your config file

[Anchor link to section titled &#34;Step 4: Set up your config file&#34;](https://shopify.dev/themes/tools/theme-kit/getting-started#step-4-set-up-your-config-file)

A [`config.yml`](https://shopify.dev/themes/tools/theme-kit/configuration-reference#config-file) file creates a local connection to your Shopify store’s theme. You can use the previous information you collected (Theme Kit password and theme ID) to create a `config.yml` file in your theme, and then download the theme locally.

### Steps:

[Anchor link to section titled &#34;Steps:&#34;](https://shopify.dev/themes/tools/theme-kit/getting-started#steps)

1. Create a directory for your theme:

   Terminal

   Copy

   ```bash
   $ mkdir [your-theme-name]
   ```
2. Navigate to the new directory:

   Terminal

   Copy

   ```bash
   $ cd [your-theme-name]
   ```
3. To download a specific theme, and create the `config.yml` file that connects this theme with a local version in the directory you just created, run the following command:

   Terminal

   Copy

   ```bash
   $ theme get --password=[your-password] --store="[your-store.myshopify.com]" --themeid=[your-theme-id]
   ```


## Step 5: Create a new theme

[Anchor link to section titled &#34;Step 5: Create a new theme&#34;](https://shopify.dev/themes/tools/theme-kit/getting-started#step-5-create-a-new-theme)

To create a new theme, run the following command:

Terminal

Copy

```bash
$ theme new --password=[your-password] --store="[your-store.myshopify.com]" --name=[theme name]
```


## Open

[Anchor link to section titled &#34;Open&#34;](https://shopify.dev/themes/tools/theme-kit/command-reference#open)

Opens the preview page for your theme in your browser and prints out the URL for your reference.

Terminal

Copy

```bash
# opens http://your-store.myshopify.com?preview_theme_id=[your-theme-id]
$ theme open --env=production --password=[your-password] --store="[your-store.myshopify.com]" --name=[theme name] 
```

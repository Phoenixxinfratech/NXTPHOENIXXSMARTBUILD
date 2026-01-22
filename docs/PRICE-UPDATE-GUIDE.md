# 📊 PHOENIXX Product Price Update Guide

## For Sales & Admin Team - No Coding Required!

This guide explains how to update product prices on the website using Google Sheets.

---

## 🎯 Quick Summary

| What | How |
|------|-----|
| **Update Prices** | Edit the Google Sheet → Prices auto-update in 5 minutes |
| **Immediate Update** | Click "Refresh Prices" bookmark |
| **Add New Products** | Contact tech team |

---

## 📋 Step-by-Step: Setting Up Google Sheet

### Step 1: Create the Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Click **"+ Blank"** to create a new sheet
3. Name it: **"PHOENIXX Product Prices"**

### Step 2: Import Product Template

1. Download the template from: `https://phoenixxsmartbuild.com/templates/product-prices-template.csv`
2. In Google Sheets: **File → Import → Upload**
3. Select the downloaded CSV file
4. Choose **"Replace current sheet"**

### Step 3: Publish the Sheet (One-time setup)

1. Click **File → Share → Publish to web**
2. Under "Link", select:
   - **Sheet1** (or the sheet with prices)
   - **Comma-separated values (.csv)**
3. Click **"Publish"**
4. Copy the URL that appears (looks like: `https://docs.google.com/spreadsheets/d/YOUR_ID/pub?gid=0&single=true&output=csv`)
5. Send this URL to the tech team to add to the environment configuration

### Step 4: For Tech Team - Add Environment Variable

Add this to your `.env.local` or Netlify environment variables:

```
GOOGLE_SHEET_CSV_URL=https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/pub?gid=0&single=true&output=csv
```

Replace `YOUR_SHEET_ID` with the actual sheet ID from the published URL.

---

## ✏️ How to Update Prices

### Daily Price Updates

1. Open the Google Sheet
2. Find the product using **SKU** (Column A) or **Product Name** (Column B)
3. Update the **Price (INR)** in Column D
4. Update **Last Updated** in Column F (optional, for tracking)
5. **That's it!** Prices update automatically within 5 minutes

### Example:

To change **30mm PUF Panel** price from ₹850 to ₹900:

| Before | After |
|--------|-------|
| PHX-PUF-30 | Sandwich PUF Panel | 30mm | **850** | PHX-PUF-30 | Sandwich PUF Panel | 30mm | **900** |

---

## 📦 Product SKU Reference

### Sandwich Panels

| SKU | Product | Variant |
|-----|---------|---------|
| PHX-PUF-30 | Sandwich PUF Panel | 30mm |
| PHX-PUF-40 | Sandwich PUF Panel | 40mm |
| PHX-PUF-50 | Sandwich PUF Panel | 50mm |
| PHX-PUF-60 | Sandwich PUF Panel | 60mm |
| PHX-PUF-80 | Sandwich PUF Panel | 80mm |
| PHX-PUF-100 | Sandwich PUF Panel | 100mm |
| PHX-PUF-120 | Sandwich PUF Panel | 120mm |
| PHX-PUF-150 | Sandwich PUF Panel | 150mm |
| PHX-ROOF-30 to PHX-ROOF-150 | Roofing PUF Panel | 30mm to 150mm |
| PHX-PIR-40 to PHX-PIR-150 | PIR Panel | 40mm to 150mm |
| PHX-RW-50 to PHX-RW-200 | Rockwool Panel | 50mm to 200mm |
| PHX-FM-PIR-50 to PHX-FM-RW-150 | FM Approved Panel | Various |
| PHX-WALL-30 to PHX-WALL-100 | Wall & Ceiling Panel | 30mm to 100mm |

### Doors

| SKU | Product | Variant |
|-----|---------|---------|
| PHX-CRD-S90 | Cleanroom Door | Single Leaf 900x2100mm |
| PHX-CRD-D120 | Cleanroom Door | Double Leaf 1200x2100mm |
| PHX-FED-60S to PHX-FED-120D | Fire Emergency Exit | 60-120 min ratings |
| PHX-FMD-60S to PHX-FMD-120D | Fire Rated Multipurpose | 60-120 min ratings |
| PHX-CSD-H100 to PHX-CSD-RR | Cold Storage Door | Various sizes |
| PHX-HRM-S100 to PHX-HRM-ICU | Hermetic Door | Various types |

### Cleanroom Solutions

| SKU | Product | Variant |
|-----|---------|---------|
| PHX-CRP-50P to PHX-CRP-SS | Cleanroom Partition | Various materials |
| PHX-CRC-NW50 to PHX-CRC-SSW | Cleanroom False Ceiling | Various types |
| PHX-CRDS-S90 to PHX-CRDS-INT | Cleanroom Doors | Various types |
| PHX-CRF-EP2 to PHX-CRF-RAF | Cleanroom Flooring | Various types |

---

## ⚡ Force Immediate Price Update

If you need prices to update immediately (without waiting 5 minutes):

1. Open this URL in your browser:
   ```
   https://phoenixxsmartbuild.com/api/prices?action=refresh
   ```
2. You'll see a confirmation message
3. Prices are now updated!

**Or create a bookmark:**
1. Right-click your bookmarks bar
2. Click "Add page..."
3. Name: "Refresh Prices"
4. URL: `javascript:fetch('https://phoenixxsmartbuild.com/api/prices?action=refresh',{method:'POST'}).then(r=>r.json()).then(d=>alert('Prices refreshed: '+d.priceCount+' products updated!')).catch(e=>alert('Error: '+e))`

---

## 📱 Mobile Update

You can also update prices from your phone:
1. Install **Google Sheets** app
2. Open the price sheet
3. Edit prices directly
4. Changes sync automatically

---

## ❓ FAQ

### Q: How long before prices show on website?
**A:** Maximum 5 minutes. For immediate update, use the refresh link.

### Q: Can I add a new product?
**A:** Adding new products requires tech team assistance. Contact: [tech@phoenixxsmartbuild.com]

### Q: What if I enter a wrong price?
**A:** Simply correct it in the sheet. The website will update automatically.

### Q: Can multiple people edit at the same time?
**A:** Yes! Google Sheets supports real-time collaboration.

### Q: Is there a backup?
**A:** Yes, the website keeps default prices. If the sheet is unavailable, it shows backup prices.

### Q: Can customers see price history?
**A:** No, only the current price is shown. Update the "Last Updated" column for internal tracking.

---

## 🆘 Need Help?

- **Technical Issues:** Contact tech team
- **Sheet Access:** Contact admin team lead
- **Price Disputes:** Contact sales manager

---

## 📝 Sheet Access Management

### To give someone edit access:

1. Open the Google Sheet
2. Click **Share** (top right)
3. Enter their email
4. Set permission to **"Editor"**
5. Click **Send**

### Recommended Access Levels:

| Role | Access |
|------|--------|
| Sales Manager | Editor |
| Sales Team | Editor |
| Marketing | Viewer |
| Tech Team | Editor |

---

*Last updated: January 2026*
*Document version: 1.0*


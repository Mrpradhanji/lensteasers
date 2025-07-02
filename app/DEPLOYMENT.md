# LensTeaser Deployment Guide

## Recommended Platform: Vercel

### Why Vercel?
- Perfect Next.js integration
- Excellent media handling and CDN
- Automatic image optimization
- Generous free tier (100GB bandwidth/month)
- Easy GitHub integration

### Quick Deploy Steps:

1. **Prepare Your Repository**
   ```bash
   # Ensure all changes are committed
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy to Vercel**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Navigate to your app directory
   cd lensteasers/app
   
   # Deploy
   vercel
   ```

3. **Follow the prompts:**
   - Link to existing project or create new
   - Set project name: `lensteaser`
   - Confirm build settings (should auto-detect Next.js)

### Environment Variables (if needed):
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`: Your EmailJS public key
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`: Your EmailJS service ID
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`: Your EmailJS template ID

## Alternative: Netlify

### Setup Steps:
1. Create account on [netlify.com](https://netlify.com)
2. Connect your GitHub repository
3. Set build command: `npm run build`
4. Set publish directory: `.next`
5. Deploy

## Media Optimization Tips

### For Large Photo Libraries:
1. **Use Next.js Image Component** (already implemented)
2. **Consider Cloudinary** for advanced image optimization
3. **Implement lazy loading** (already implemented)

### For Video Content:
1. **Use multiple formats** (MP4 + WebM)
2. **Consider video hosting services:**
   - Vimeo (professional, good quality)
   - YouTube (free, good compression)
   - Cloudflare Stream (fast, global CDN)

### Performance Monitoring:
- Use Vercel Analytics (built-in)
- Monitor Core Web Vitals
- Track image loading performance

## Scaling Considerations

### When Media Library Grows:
1. **Move to external storage:**
   - AWS S3 + CloudFront
   - Cloudinary
   - Cloudflare Images

2. **Implement CDN:**
   - Vercel Edge Network (automatic)
   - Cloudflare CDN
   - AWS CloudFront

3. **Optimize build times:**
   - Use incremental static regeneration
   - Implement proper caching strategies

## Cost Estimation

### Vercel Pricing (as of 2024):
- **Free Tier**: 100GB bandwidth/month
- **Pro Plan**: $20/month - 1TB bandwidth
- **Enterprise**: Custom pricing

### Estimated Costs for Growing Media:
- 1,000 photos (2MB each) = ~2GB
- 50 videos (50MB each) = ~2.5GB
- Monthly bandwidth: ~10-50GB (depending on traffic)

## Next Steps

1. **Deploy to Vercel** (recommended)
2. **Set up custom domain** (optional)
3. **Configure analytics** (Vercel Analytics)
4. **Monitor performance** and optimize as needed
5. **Consider media hosting** when library exceeds 1GB

## Support

For deployment issues:
- Vercel Documentation: https://vercel.com/docs
- Next.js Deployment: https://nextjs.org/docs/deployment
- Vercel Support: https://vercel.com/support 
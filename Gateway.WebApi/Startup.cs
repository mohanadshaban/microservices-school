using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using Ocelot.DependencyInjection;
using Ocelot.Middleware;

namespace Gateway.WebApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddOcelot();
            services.AddMvcCore().AddApiExplorer();
            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                            builder =>
                            {
                                builder.AllowAnyHeader()
                             .AllowAnyMethod()
                             .SetIsOriginAllowed((host) => true)
                              .AllowCredentials();
                            });
            });

            #region Swagger
            services.AddSwaggerForOcelot(Configuration);
       
            #endregion
}

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
public async void Configure(IApplicationBuilder app, IWebHostEnvironment env)
{
    if (env.IsDevelopment())
    {
        app.UseDeveloperExceptionPage();
    }
    app.UseRouting();
            app.UseCors("CorsPolicy"); // above UseRouting

            app.UseEndpoints(endpoints =>
    {
        endpoints.MapControllers();
    });

           
            //https://github.com/Burgyn/MMLib.SwaggerForOcelot
            app.UseSwaggerForOcelotUI(opt =>
            {
                opt.PathToSwaggerGenerator = "/swagger/docs";
            });
            await app.UseOcelot();
}
    }
}
